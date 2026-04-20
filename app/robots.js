export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin", "/api"]
      }
    ],
    sitemap: "https://rahul-co.vercel.app/sitemap.xml",
    host: "https://rahul-co.vercel.app"
  };
}
