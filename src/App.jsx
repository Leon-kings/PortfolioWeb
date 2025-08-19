import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { LoadingSpinner } from "./components/loadingspinn/LoaddingSpin";
import { Navbar } from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import { Footer } from "./components/footer/Footer";
import { Services } from "./pages/services/Services";
import { About } from "./pages/about/About";
import { Experience } from "./pages/experience/Experience";
import { Portfolio } from "./components/portfolio/Portfolio";
import { Message } from "./pages/contacts/Messages";
import { NotFound } from "./pages/notfound/Notfound";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="w-full min-h-screen grid grid-rows-[auto,1fr,auto]">
        {/* Loading Spinner */}
        {isLoading && <LoadingSpinner />}

        {/* Toast Container */}
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />

        {!isLoading && (
          <>
            {/* Navbar */}
            <Navbar />

            {/* Main Content with responsive grid */}
            <main
              className="main-content bg-gray-50 
              px-3 sm:px-6 md:px-10 lg:px-16 xl:px-24 
              py-6 sm:py-8 md:py-10 lg:py-12"
            >
              <div
                className="grid grid-cols-1 
                sm:grid-cols-2 
                md:grid-cols-3 
                lg:grid-cols-4 
                xl:grid-cols-5 
                gap-6"
              >
                <div className="col-span-full">
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/7382/2922" element={<Services />} />
                    <Route path="/7283/2829" element={<About />} />
                    <Route path="/7092/2416" element={<Experience />} />
                    <Route path="/7782/8191" element={<Message />} />
                    <Route path="/7893/1673" element={<Portfolio />} />
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </div>
              </div>

              {/* Page-level Toast */}
              <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
              />
            </main>

            {/* Footer */}
            <Footer />
          </>
        )}
      </div>
    </>
  );
}
