import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Homefield Marketing — Grow Your Business";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-end",
          background: "#101820",
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        {/* Gold accent bar */}
        <div
          style={{
            width: "64px",
            height: "4px",
            background: "#DAAA00",
            marginBottom: "32px",
          }}
        />
        {/* Main heading */}
        <div
          style={{
            fontSize: 72,
            fontWeight: 900,
            color: "#FFFFFF",
            lineHeight: 1.05,
            marginBottom: "24px",
            letterSpacing: "-1px",
          }}
        >
          Grow your business.
        </div>
        {/* Tagline */}
        <div
          style={{
            fontSize: 28,
            fontWeight: 400,
            color: "#DAAA00",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            marginBottom: "48px",
          }}
        >
          Home-grown on the Canadian prairies
        </div>
        {/* Company name */}
        <div
          style={{
            fontSize: 22,
            fontWeight: 700,
            color: "rgba(255,255,255,0.6)",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
          }}
        >
          Homefield Marketing
        </div>
      </div>
    ),
    { ...size }
  );
}
