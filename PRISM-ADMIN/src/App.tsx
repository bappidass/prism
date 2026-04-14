import { useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import useAuthStore from "@/stores/useAuthStore";
import AdminLayout from "@/components/AdminLayout";
import LoginPage from "@/pages/LoginPage";
import DashboardPage from "@/pages/DashboardPage";
import NewsPage from "@/pages/NewsPage";
import InquiriesPage from "@/pages/InquiriesPage";
import DirectorsPage from "@/pages/DirectorsPage";
import AdvisorsPage from "@/pages/AdvisorsPage";
import PartnershipsPage from "@/pages/PartnershipsPage";
import ClientsPage from "@/pages/ClientsPage";
import VideosPage from "@/pages/VideosPage";
import ImpactCountriesPage from "@/pages/ImpactCountriesPage";
import NotFound from "@/pages/NotFound";

const queryClient = new QueryClient();

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { user, initialized } = useAuthStore();
  if (!initialized) return <div className="min-h-screen flex items-center justify-center text-muted-foreground">Loading...</div>;
  if (!user) return <Navigate to="/login" replace />;
  return <AdminLayout>{children}</AdminLayout>;
};

const App = () => {
  const { initAuth } = useAuthStore();

  useEffect(() => {
    const unsub = initAuth();
    return unsub;
  }, [initAuth]);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/" element={<ProtectedRoute><DashboardPage /></ProtectedRoute>} />
            <Route path="/news" element={<ProtectedRoute><NewsPage /></ProtectedRoute>} />
            <Route path="/inquiries" element={<ProtectedRoute><InquiriesPage /></ProtectedRoute>} />
            <Route path="/directors" element={<ProtectedRoute><DirectorsPage /></ProtectedRoute>} />
            <Route path="/advisors" element={<ProtectedRoute><AdvisorsPage /></ProtectedRoute>} />
            <Route path="/partnerships" element={<ProtectedRoute><PartnershipsPage /></ProtectedRoute>} />
            <Route path="/clients" element={<ProtectedRoute><ClientsPage /></ProtectedRoute>} />
            <Route path="/videos" element={<ProtectedRoute><VideosPage /></ProtectedRoute>} />
            <Route path="/impact-countries" element={<ProtectedRoute><ImpactCountriesPage /></ProtectedRoute>} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
