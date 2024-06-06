import Header from "@/components/Header";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="min-h-screen bg-[url('/images/bg-3.png')] bg-no-repeat bg-cover bg-center">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
