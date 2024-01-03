export const metadata = {
  title: "LinkForge",
  description: "One link to rule them all",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
