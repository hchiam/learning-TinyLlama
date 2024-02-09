Bun.serve({
    fetch(req) {
      const url = new URL(req.url);
  
      if (url.pathname.endsWith("/") || url.pathname.endsWith("/index.html"))
        return new Response(Bun.file(import.meta.dir + "/index.html"));
  
      if (url.pathname.endsWith("/brain.js"))
        return new Response(Bun.file(import.meta.dir + "/brain.js"));
  
      // all other routes
      // return new Response("Hello!");
      // return new Response({});
    },
  });