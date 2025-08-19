
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import "./App.css";
import { useState, useEffect } from "react";
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
      <div className="w-full">
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
        <main className="app-container w-full mx-auto py-8 px-4">
          {!isLoading && (
           <div className="routes">
              <Navbar />
              <div className="w-full main-content min-h-screen bg-gray-50">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/7382/2922" element={<Services />} />
                  <Route path="/7283/2829" element={<About />} />
                  <Route path="/7092/2416" element={<Experience />} />
                  <Route path="/7782/8191" element={<Message />} />
                  <Route path="/7893/1673" element={<Portfolio />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
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
              </div>

              <Footer />
            </div>
          )}
        </main>
      </div>
    </>
  );
}
