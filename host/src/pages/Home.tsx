import { lazy } from "react";
import { useNavigate } from "react-router-dom";
import { Archive, ChartLine, StickyNote, Tags } from "lucide-react";
import Header from "../components/Header";
import FeatureCard from "../components/FeatureCard";
import Footer from "../components/Footer";
const Button = lazy(() => import("ui/Button"));

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="bg-amber-50 flex-1 flex flex-col justify-center items-center text-center px-4 py-20">
        <h1 className="text-4xl md:text-5xl font-bold text-amber-600 mb-4">
          Take Notes, Stay Organized
        </h1>
        <p className="text-gray-700 max-w-xl mb-8">
          MicroNotes helps you capture your ideas, manage tasks, and visualize
          your productivity in one intuitive dashboard.
        </p>
        <Button onClick={() => navigate("/auth/signup")}>Get Started</Button>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-white">
        <h2 className="text-3xl font-bold text-center mb-12">Features</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <FeatureCard
            icon={<StickyNote size={30} />}
            title="Create Notes"
            description="Easily create notes with rich content and organize them."
          />
          <FeatureCard
            icon={<Tags size={30} />}
            title="Manage Tags"
            description="Add, customize, and organize your tags for better categorization."
          />
          <FeatureCard
            icon={<Archive size={30} />}
            title="Archive Notes"
            description="Keep your dashboard clean by archiving notes you no longer need."
          />
          <FeatureCard
            icon={<ChartLine size={30} />}
            title="Dashboard Analytics"
            description="View statistics and insights about your notes and productivity."
          />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
