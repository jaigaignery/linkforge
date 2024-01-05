import Header from "@/components/Header";
import "../globals.css";
import { faFireFlameCurved } from "@fortawesome/free-solid-svg-icons";

export const metadata = {
  title: "LinkForge",
  description: "One link to rule them all",
};

export default function RootLayout({ children }) {
  const logo = { faFireFlameCurved };
  return (
    <html lang="en">
      <body
        className={`max-w-screen-2xl bg-no-repeat mx-auto h-full sm:h-screen bg-gradient-to-tl from-secondary-color to-primary-color p-6`}
      >
        <main>
          <Header icon={logo} />
          <div>{children}</div>
        </main>
      </body>
    </html>
  );
}
