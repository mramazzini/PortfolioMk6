import "./App.css";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FrontPage from "./components/FrontPage";
import TimeLinePage from "./components/TimeLinePage";
function App() {
  return (
    <div className="justify-center text-white items-center text-center w-full flex-col bg-black/95">
      <FrontPage />
      <TimeLinePage />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
