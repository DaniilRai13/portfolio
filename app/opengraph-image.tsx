import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { siteConfig } from "@/data/site.data";

export const alt = siteConfig.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const photo = await readFile(join(process.cwd(), "assets/photo.jpg"));
  const photoSrc = `data:image/jpeg;base64,${photo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 80px",
          background: "#fbf3e4",
          color: "#14161a",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", maxWidth: 640 }}>
          <div
            style={{
              display: "flex",
              alignSelf: "flex-start",
              padding: "10px 18px",
              borderRadius: 12,
              background: "#cfe0ff",
              color: "#1f3a6b",
              fontSize: 24,
              fontWeight: 700,
            }}
          >
            {siteConfig.role}
          </div>
          <div style={{ marginTop: 28, fontSize: 76, fontWeight: 800, lineHeight: 1.05 }}>
            {siteConfig.name}
          </div>
          <div style={{ marginTop: 20, fontSize: 32, lineHeight: 1.35, color: "#4a5568" }}>
            Fast, responsive web apps and websites with React, TypeScript and Tailwind CSS.
          </div>
        </div>

        <div style={{ display: "flex", position: "relative", width: 380, height: 380 }}>
          <div
            style={{
              position: "absolute",
              right: -10,
              bottom: -10,
              width: 360,
              height: 360,
              borderRadius: 9999,
              background: "#f6d365",
            }}
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={photoSrc}
            alt=""
            width={360}
            height={360}
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              borderRadius: 9999,
              border: "6px solid #14161a",
              objectFit: "cover",
            }}
          />
        </div>
      </div>
    ),
    size,
  );
}
