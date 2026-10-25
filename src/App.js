import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import MainRoutes from "./Routing/MainRoutes";
import Home from "./Pages/Home";
import Contacts from "./Pages/Contacts";
import About from "./Pages/About";
import League from "./Pages/League";
import PPage from "./Pages/PPage";
import "./Responsive.css";
import Terms from "./Pages/Terms";
import Policy from "./Pages/Policy";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    window.history.scrollRestoration = "manual";
  }, [pathname]);

  return null;
};

const GoogleAnalyticsPageView = () => {
  const { pathname, search } = useLocation();

  useEffect(() => {
    if (typeof window.gtag !== "function") return;

    window.gtag("event", "page_view", {
      page_location: window.location.href,
      page_path: `${pathname}${search}`,
      page_title: document.title,
    });
  }, [pathname, search]);

  return null;
};

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const originalError = console.error;
  console.error = (...args) => {
    if (
      typeof args[0] === "string" &&
      args[0].includes(
        "ResizeObserver loop completed with undelivered notifications"
      )
    ) {
      return;
    }
    originalError(...args);
  };

  return (
    <BrowserRouter>
      <ScrollToTop />
      <GoogleAnalyticsPageView />
      <Routes>
        <Route element={<MainRoutes />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contacts />} />
          <Route path="/programm" element={<PPage />} />
          <Route path="/league" element={<League />} />
          <Route path="/terms-condition" element={<Terms/>}/>
          <Route path="/privacy-policy" element={<Policy/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
