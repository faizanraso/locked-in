import { createTRPCRouter } from "~/server/api/trpc";
import { userDataRouter } from "./routers/userData";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  userData: userDataRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
