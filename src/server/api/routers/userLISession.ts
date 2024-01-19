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
      const userCategory = await ctx.db.userCategory.findFirst({
        where: { name: input.categoryName, userId: ctx.session.user.id },
      });

      if (userCategory) {
        const trackSession = await ctx.db.userLISession.create({
          data: {
            userId: ctx.session.user.id,
            duration: input.duration,
            userCategoryId: userCategory.id,
          },
        });

        const updateCategoryData = await ctx.db.userCategory.update({
          where: {
            id: userCategory.id,
          },
          data: {
            durationTracked: userCategory.durationTracked + input.duration,
            sessionsTracked: userCategory.sessionsTracked + 1,
          },
        });
        
      } else {
        return "Invalid ";
      }
    }),
});
