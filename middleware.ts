import { authMiddleware } from "@clerk/nextjs";

// This example protects all routes including api/trpc routes
// Please edit this to allow other routes to be public as needed.
// See https://clerk.com/docs/references/nextjs/auth-middleware for more information about configuring your Middleware
export default authMiddleware({
	// publicRoutes: ["/", "/event/**", "/service/**", "/venue/**"],
	publicRoutes: [
		"/",
		"/auth/get-started",
		"/api/event",
		"/api/service",
		"/api/venue",
		"/api/categories",
	],
});

export const config = {
	matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
