import Navbar from "@/components/navigation/Navbar";
import "./globals.css";
import "react-toastify/dist/ReactToastify.css";
import type { Metadata } from "next";
import { ToastContainer } from "react-toastify";

export const metadata: Metadata = {
  title: "Bodyfat Estimator",
  description: "Leverage the power of AI to estimate your Bodyfat percentage!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;0,1000;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900;1,1000&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`bg-primary text-secondary min-h-screen lg:h-screen lg:flex`}
      >
        <ToastContainer
          position="bottom-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss={false}
          draggable
          pauseOnHover={false}
          theme="dark"
        />
        <header className="sticky w-full top-[calc(100%-4rem)] bg-primary z-10 lg:static lg:top-0 lg:h-full lg:basis-80 xl:basis-96 ">
          <Navbar />
        </header>
        {children}
      </body>
    </html>
  );
}
