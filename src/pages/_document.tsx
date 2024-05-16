import Header from "@/components/Header";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="bg-[url('https://assets.production.linktr.ee/profiles/_next/static/images/background-desktop-95ff07dcd891255a69dcda75b9232793.png')] bg-no-repeat bg-cover bg-left">
        <Header />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
