import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import Dashboard from "@/components/dashboard/Dashboard";
//import Dashboard from "@/components/dashboard/MyLearningDashboard";

export default function MyLearningPage() {
  return (
    <>
      <Header />
      <main className="bg-gray-50 min-h-screen">
        <Dashboard/>
        
      </main>
      <Footer />
    </>
  );
}