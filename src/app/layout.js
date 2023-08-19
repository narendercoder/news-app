import "./globals.css";
import "react-toastify/dist/ReactToastify.css";
import GlobalWrapper from "./lib/GlobalWrapper";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body 
        className="bg-gray-100 dark:bg-zinc-900 transition-all duration-700 overflow-x-hidden w-full"
        suppressHydrationWarning={true}
      >
        <GlobalWrapper>{children}</GlobalWrapper>
      </body>
    </html>
  );
}
