import "./globals.css";
import SiteThemeController from "./components/SiteThemeController";

const description =
  "Rahul Co. is a cinematic luxury travel showcase with immersive stays, curated destinations, and reference-matched opening animation.";

export const metadata = {
  title: {
    default: "Rahul Co.",
    template: "%s | Rahul Co."
  },
  description,
  metadataBase: new URL("https://effervescent-gingersnap-dfc9b4.netlify.app"),
  openGraph: {
    title: "Rahul Co.",
    description,
    url: "https://effervescent-gingersnap-dfc9b4.netlify.app",
    siteName: "Rahul Co.",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Rahul Co."
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Rahul Co.",
    description,
    images: ["/opengraph-image"]
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SiteThemeController />
        {children}
      </body>
    </html>
  );
}
