import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";

export const userDataRouter = createTRPCRouter({

  create: protectedProcedure
    .input(z.object({ categoryName: z.string().min(1) }))
    .mutation(async ({ ctx, input }) => {
      return ctx.db.userLISession.create({
        data: {
          categoryName: input.categoryName,
          user: { connect: { id: ctx.session.user.id } },
        },
      });
    }),

  getDashboardData: protectedProcedure
    // .input(z.object({ id: z.string() }))
    .query(({ ctx }) => {
      return ctx.db.user.findFirst({
        where: { id: ctx.session.user.id },
        select: {
          avgSessionLength: true,
          totalSessions: true,
          totalTimeLockedIn: true,
          categoriesTracked: true,
        },
      });
    }),

  getUserCategoryData: protectedProcedure.query(({ ctx }) => {
    return ctx.db.user.findFirst({
      where: { id: ctx.session.user.id },
      select: {
        categoriesTracked: true,
      },
    });
  }),

  createCategory: protectedProcedure
    .input(z.object({ categoryName: z.string().min(1) }))
    .mutation(async ({ ctx, input }) => {
      return ctx.db.user.update({
        where: { id: ctx.session.user.id },
        data: {
          categoriesTracked: {
            push: {
              categoryName: input.categoryName,
              hoursTracked: 0,
              sessionsTracked: 0,
            },
          },
        },
      });
    }),

});
