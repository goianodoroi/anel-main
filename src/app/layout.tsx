import type { Metadata } from "next";
import "./globals.css";
import { getConfig } from "./actions";

export const metadata: Metadata = {
  title: "Oura Ring 4 — Our Most Personal Smart Ring Ever",
  description:
    "Sleeker. Smarter. Made for you. Get the Oura Ring 4 now.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const config = await getConfig();

  return (
    <html lang="en" className="h-full antialiased">
      <head>
        {config.utmPixels?.map((p: { id: string; code: string }) => {
          const cleanCode = p.code.replace(/^\s*<script[^>]*>/i, '').replace(/<\/script>\s*$/i, '');
          return <script key={p.id} dangerouslySetInnerHTML={{ __html: cleanCode }} />;
        })}
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
