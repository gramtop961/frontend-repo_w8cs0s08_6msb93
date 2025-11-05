import Header from "./components/Header";
import Hero from "./components/Hero";
import Sections from "./components/Sections";
import Chatbot from "./components/Chatbot";

function App() {
  const handleStartChat = () => {
    const el = document.getElementById("chat");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "end" });
    }
  };

  return (
    <div className="min-h-screen bg-white text-[#222222]">
      <Header />
      <main>
        <Hero onStartChat={handleStartChat} />
        <Sections />
      </main>
      <footer className="mt-20 border-t border-[#EAEAEA] bg-gradient-to-b from-white to-[#F7F7F7]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-[#222222]/70">© {new Date().getFullYear()} UAE Setup Pro — Business Setup in Dubai & UAE</p>
          <div className="text-sm text-[#222222]/70">Free Zone • Mainland • Offshore</div>
        </div>
      </footer>

      <Chatbot />
    </div>
  );
}

export default App;
