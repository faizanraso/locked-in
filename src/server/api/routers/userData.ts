import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";

export const userDataRouter = createTRPCRouter({
  getDashboardData: protectedProcedure
    // .input(z.object({ id: z.string() }))
    .query(({ ctx }) => {
      return ctx.db.user.findFirst({
        where: { id: ctx.session.user.id },
        select: {
          userCategories: true,
          UserLISessions: true,
        },
      });
    }),

  getUserCategoryData: protectedProcedure.query(({ ctx }) => {
    return ctx.db.user.findFirst({
      where: { id: ctx.session.user.id },
      select: {
        userCategories: true,
      },
    });
  }),

  createCategory: protectedProcedure
    .input(z.object({ categoryName: z.string().min(1) }))
    .mutation(async ({ ctx, input }) => {
      return ctx.db.userCategory.create({
        data: {
          userId: ctx.session.user.id,
          name: input.categoryName,
          durationTracked: 0,
          sessionsTracked: 0,
        },
      });
    }),
});
