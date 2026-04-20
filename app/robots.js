export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin", "/api"]
      }
    ],
    sitemap: "https://effervescent-gingersnap-dfc9b4.netlify.app/sitemap.xml",
    host: "https://effervescent-gingersnap-dfc9b4.netlify.app"
  };
}
