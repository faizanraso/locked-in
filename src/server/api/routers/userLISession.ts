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
      const trackSession = await ctx.db.userLISession.create({
        data: {
          user: { connect: { id: ctx.session.user.id } },
          categoryName: input.categoryName,
          duration: input.duration,
        },
      });

      const userCategoryData = await ctx.db.user.findFirst({
        where: { email: ctx.session.user.email ?? "" },
        select: { categoriesTracked: true },
      });

      const updatedCategoryData = userCategoryData?.categoriesTracked.map(
        (category) => {
          if (category?.categoryName === input.categoryName) {
            return {
              ...category,
              duration: (category?.duration || 0) + input.duration,
            };
          }
        },
      );

      const updateCategoryData = await ctx.db.user.update({
        where: {
          email: ctx.session.user.email ?? "",
        },
        data: {
          categoriesTracked: updatedCategoryData,
        },
      });

      return { trackSession, updateCategoryData };
    }),
});
