import { MealCategory } from "./components/MealCategory";
import { FilterSection } from "./components/FilterSection";
import { Footer } from "./components/Footer";
import Header from "./components/Header";
import { NavBar } from "./components/NavBar";
import { Recipes } from "./components/Recipes";

function App() {
  return (
    <>
      <NavBar />
      <Header />
      <FilterSection />
      <MealCategory />
      <Recipes />
      <Footer />
    </>
  );
}

export default App;