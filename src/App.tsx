
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import OurStory from "./pages/OurStory";
import Solutions from "./pages/Solutions";
import WhyUs from "./pages/WhyUs";
import Careers from "./pages/Careers";
import Connect from "./pages/Connect";
import NotFound from "./pages/NotFound";
import ClientLogin from "./pages/ClientLogin";
import EmployeeHRMS from "./pages/EmployeeHRMS";
import RFP from "./pages/RFP";
import FAQ from "./pages/FAQ";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import LoginPage from "./pages/Login"; // Import Login page
import SignUpPage from "./pages/SignUp"; // Import Sign Up page

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/our-story" element={<OurStory />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/why-us" element={<WhyUs />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/connect" element={<Connect />} />
          <Route path="/client-login" element={<ClientLogin />} />
          <Route path="/employee-hrms" element={<EmployeeHRMS />} />
          <Route path="/rfp" element={<RFP />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/login" element={<LoginPage />} /> {/* Add Login route */}
          <Route path="/signup" element={<SignUpPage />} /> {/* Add Sign Up route */}
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
