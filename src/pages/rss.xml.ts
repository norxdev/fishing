import rss from "@astrojs/rss";

export function GET(context) {
  return rss({
    title: "Fishing Blog",
    description: "Fishing tips and techniques",
    site: context.site,
    items: []
  });
}
