import { Navbar } from "components/Navbar";
import "../styles/globals.css";

export const metadata = {
  title: "API SONGS",
  description: "API SONGS is a simple app to manage songs.",
}

function RootLayout({ children }) {
  return (
    <html>
      <body>
        <Navbar />
        <main className="px-5 md:px-0 container mx-auto">{children}</main>
      </body>
    </html>
  );
}

export default RootLayout;
