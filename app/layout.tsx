import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Startup Metrics Red Flag Detector",
  description: "Detect startup death spiral patterns early. Analyze your metrics and get alerted to failure modes before they become fatal."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="b274c591-540a-49d5-9c5e-a943075fd5c0"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
