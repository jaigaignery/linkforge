import { Lato } from "next/font/google";
import "../../globals.css";
import mongoose from "mongoose";
import { Page } from "@/models/Page";

const lato = Lato({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata = {
  title: "LinkForge",
  description: "One link to rule them all",
};

export default async function RootLayout({ children, params }) {
  const uri = params.uri;
  mongoose.connect(process.env.MONGODB_URI);
  const page = await Page.findOne({ uri });

  return (
    <html lang="en">
      <body
        className={`h-max bg-center p-1 bg-cover ${lato.className}`}
        style={
          page.bgType === "color"
            ? { backgroundColor: page.bgColor }
            : { backgroundImage: `url(${page.bgImage})` }
        }
      >
        <main>{children}</main>
      </body>
    </html>
  );
}
