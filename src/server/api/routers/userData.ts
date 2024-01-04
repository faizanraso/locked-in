import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";

export const userDataRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      };
    }),

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
    .query(({ ctx, input }) => {
      return ctx.db.user.findFirst({ where: { id: ctx.session.user.id } });
    }),

  //   getLatest: protectedProcedure.query(({ ctx }) => {
  //     return ctx.db.post.findFirst({
  //       orderBy: { createdAt: "desc" },
  //       where: { createdBy: { id: ctx.session.user.id } },
  //     });
  //   }),

  getSecretMessage: protectedProcedure.query(() => {
    return "you can now see this secret message!";
  }),
});