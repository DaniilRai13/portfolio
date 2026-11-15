import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

// Тот же знак «DR», что и в шапке
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#3b5bdb",
          border: "5px solid #14161a",
          borderRadius: 16,
          color: "#cfe0ff",
          fontSize: 30,
          fontWeight: 700,
          letterSpacing: -1,
        }}
      >
        DR
      </div>
    ),
    size,
  );
}
