import { Application, Status, Context } from "https://deno.land/x/oak/mod.ts";
import { router } from './routes/routes.ts';

const app = new Application();

function notFound(context: Context) {
  context.response.status = Status.NotFound;
  context.response.body = `<html><body><h1>404 - Not Found</h1><p>Path <code>${context.request.url}</code> not found.`;
}

app.use(router.routes());
app.use(router.allowedMethods());

app.use(notFound);

app.addEventListener("listen", ({ hostname, port }) => {
  console.log(`Listening at: http://${hostname}:${port}`);
});

await app.listen({ hostname: "localhost", port: 3000 });
