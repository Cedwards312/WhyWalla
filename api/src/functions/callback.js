const { app } = require("@azure/functions");

app.http("callback", {
	methods: ["GET"],
	authLevel: "anonymous",
	route: "callback",
	handler: async (request) => {
		const code = request.query.get("code");

		if (!code) {
			return { status: 400, body: "Missing OAuth code." };
		}

		const tokenResponse = await fetch("https://github.com/login/oauth/access_token", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
			},
			body: JSON.stringify({
				client_id: process.env.OAUTH_GITHUB_CLIENT_ID,
				client_secret: process.env.OAUTH_GITHUB_CLIENT_SECRET,
				code,
			}),
		});

		const tokenData = await tokenResponse.json();

		if (tokenData.error || !tokenData.access_token) {
			return {
				status: 400,
				headers: { "Content-Type": "text/plain" },
				body: `GitHub OAuth error: ${tokenData.error_description || tokenData.error || "unknown error"}`,
			};
		}

		const payload = JSON.stringify({ token: tokenData.access_token, provider: "github" });

		const html = `<!doctype html>
<html><body>
<script>
(function() {
  function receiveMessage(e) {
    window.opener.postMessage(
      'authorization:github:success:' + ${JSON.stringify(payload)},
      e.origin
    );
    window.removeEventListener('message', receiveMessage, false);
  }
  window.addEventListener('message', receiveMessage, false);
  window.opener.postMessage('authorizing:github', '*');
})();
</script>
</body></html>`;

		return {
			status: 200,
			headers: { "Content-Type": "text/html" },
			body: html,
		};
	},
});
