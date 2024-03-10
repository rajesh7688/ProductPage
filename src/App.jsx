import "./App.css";
import Sidebar from "./pages/Sidebar";
import ProductSection from "./pages/ProductSection";

function App() {
  return (
    <div className="container mx-auto gap-2 flex">
      <Sidebar />
      <ProductSection />
    </div>
  );
}

export default App;
