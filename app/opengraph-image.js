import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "radial-gradient(circle at top, rgba(255,255,255,0.08), transparent 35%), linear-gradient(160deg, #020202 0%, #0c0c0c 55%, #131313 100%)",
          fontFamily: "Georgia"
        }}
      >
        <div
          style={{
            width: "92%",
            height: "82%",
            borderRadius: "32px",
            border: "1px solid rgba(255, 255, 255, 0.12)",
            background: "linear-gradient(180deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.03) 100%)",
            boxShadow: "0 30px 80px rgba(0, 0, 0, 0.35)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "64px"
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "28px" }}>
            <div
              style={{
                width: "120px",
                height: "120px",
                borderRadius: "999px",
                border: "2px solid rgba(255, 255, 255, 0.12)",
                background: "#ffffff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "64px",
                fontWeight: 700,
                color: "#111111",
                fontStyle: "italic"
              }}
            >
              R
            </div>
            <div>
              <div style={{ fontSize: "64px", fontWeight: 700, letterSpacing: "0.14em", color: "#ffffff" }}>
                RAHUL CO.
              </div>
              <div style={{ marginTop: "12px", fontSize: "28px", color: "rgba(255,255,255,0.62)", letterSpacing: "0.18em" }}>
                CURATED LUXURY JOURNEYS
              </div>
            </div>
          </div>

          <div
            style={{
              marginTop: "36px",
              fontSize: "28px",
              color: "rgba(255,255,255,0.82)",
              maxWidth: "90%"
            }}
          >
            Explore cinematic destinations, private stays, and concierge-led experiences with the same premium feel as the reference site.
          </div>
        </div>
      </div>
    ),
    size
  );
}
