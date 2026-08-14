const { app } = require("@azure/functions");

const SITE_ORIGIN = "https://www.whywalla.com";

app.http("auth", {
	methods: ["GET"],
	authLevel: "anonymous",
	route: "auth",
	handler: async () => {
		const clientId = process.env.OAUTH_GITHUB_CLIENT_ID;
		const state = Math.random().toString(36).slice(2);

		const authorizeUrl = new URL("https://github.com/login/oauth/authorize");
		authorizeUrl.searchParams.set("client_id", clientId);
		authorizeUrl.searchParams.set("redirect_uri", `${SITE_ORIGIN}/api/callback`);
		authorizeUrl.searchParams.set("scope", "public_repo");
		authorizeUrl.searchParams.set("state", state);

		return {
			status: 302,
			headers: { Location: authorizeUrl.toString() },
		};
	},
});
