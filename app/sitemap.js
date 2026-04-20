export default function sitemap() {
  const baseUrl = "https://effervescent-gingersnap-dfc9b4.netlify.app";
  const routes = [
    "",
    "/about",
    "/dates",
    "/travel",
    "/gallery",
    "/private-jets",
    "/villas",
    "/experiences",
    "/concierge",
    "/contact",
    "/support"
  ];

  return [
    ...routes.map((route, index) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: index === 0 ? 1 : 0.8
    }))
  ];
}
