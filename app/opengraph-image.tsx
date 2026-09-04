import { ImageResponse } from "next/og";

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
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background: "#050607",
          color: "#F7F7F4",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 22,
            letterSpacing: "0.28em",
            textTransform: "uppercase",
            color: "#63A73A",
          }}
        >
          Digitalizer
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div
            style={{
              display: "flex",
              fontSize: 72,
              lineHeight: 0.95,
              letterSpacing: "-0.04em",
              fontWeight: 500,
              maxWidth: 880,
            }}
          >
            Technology should adapt to people.
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 28,
              color: "rgba(247,247,244,0.62)",
              maxWidth: 760,
            }}
          >
            AI website design, custom software, and UX — Houston, Baltimore, and nationwide.
          </div>
        </div>
      </div>
    ),
    size,
  );
}
