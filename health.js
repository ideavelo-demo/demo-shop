// Health check for the deploy platform: answers 200 while the app is up.
export function health(req, res) {
  res.writeHead(200, { "content-type": "application/json" });
  res.end(JSON.stringify({ status: "ok" }));
}
