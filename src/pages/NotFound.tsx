
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <div className="text-center max-w-md p-8 bg-white rounded-lg shadow-sm">
        <h1 className="text-6xl font-bold mb-4 text-endeavour-orange">404</h1>
        <p className="text-xl text-gray-600 mb-6">Oops! The page you're looking for can't be found.</p>
        <Button asChild>
          <a href="/">Return to Logo Forge</a>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
