import { serve } from "https://deno.land/std/http/server.ts";
const s = serve("0.0.0.0:3000");

async function main() {
  for await (const req of s) {
    req.respond({ body: new TextEncoder().encode("Johnstoncode.com now with SSL\n") });
  }
}

main();
