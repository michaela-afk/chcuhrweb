import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "CHCUHR – HR konzultace a implementace";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#1F2937",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: "80px",
          position: "relative",
        }}
      >
        {/* Purple accent top-right */}
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: "340px",
            height: "340px",
            background: "#8664F2",
            borderRadius: "0 0 0 100%",
            opacity: 0.15,
          }}
        />

        {/* Logo mark */}
        <div
          style={{
            position: "absolute",
            top: "64px",
            right: "80px",
            background: "#8664F2",
            borderRadius: "20px",
            width: "90px",
            height: "90px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span style={{ color: "white", fontSize: "30px", fontWeight: 700 }}>CH</span>
        </div>

        {/* Tag line */}
        <div style={{ display: "flex", alignItems: "center", marginBottom: "28px" }}>
          <div
            style={{
              width: "44px",
              height: "4px",
              background: "#8664F2",
              borderRadius: "2px",
              marginRight: "16px",
            }}
          />
          <span
            style={{
              color: "#D2C8F1",
              fontSize: "18px",
              fontWeight: 600,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
            }}
          >
            HR konzultace &amp; implementace
          </span>
        </div>

        {/* Main title */}
        <div
          style={{
            color: "white",
            fontSize: "96px",
            fontWeight: 700,
            lineHeight: 1,
            marginBottom: "28px",
          }}
        >
          CHCUHR
        </div>

        {/* Description */}
        <div
          style={{
            color: "rgba(255,255,255,0.75)",
            fontSize: "26px",
            lineHeight: 1.5,
            maxWidth: "760px",
          }}
        >
          Pomáháme firmám budovat lepší pracoviště prostřednictvím praktického, moderního a byznysově orientovaného HR.
        </div>
      </div>
    ),
    { ...size }
  );
}
