import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";

export const userLISesionRouter = createTRPCRouter({
  create: protectedProcedure
    .input(z.object({ categoryName: z.string().min(1), duration: z.number() }))
    .mutation(async ({ ctx, input }) => {
      return ctx.db.userLISession.create({
        data: {
          user: { connect: { id: ctx.session.user.id } },
          categoryName: input.categoryName,
          duration: input.duration,
        },
      });
    }),
});
