import { getCollection } from "astro:content";

export async function GET() {
  const posts = await getCollection("blog");
  const urls = posts.map(p => `<url><loc>/blog/${p.slug}</loc></url>`).join("");

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>
     <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
       ${urls}
     </urlset>`,
    { headers: { "Content-Type": "application/xml" } }
  );
}
