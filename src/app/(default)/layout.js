import Header from "@/components/Header";
import "../globals.css";

export const metadata = {
  title: "LinkForge",
  description: "One link to rule them all",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`max-w-screen-2xl mx-auto bg-primary-color p-6`}>
        <main>
          <Header />
          <div>{children}</div>
        </main>
      </body>
    </html>
  );
}
