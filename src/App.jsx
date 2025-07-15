import "./App.css";
import Discount from "./components/Discount";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Holiday from "./components/Holiday";
import Newsletter from "./components/Newsletter";
import Offer from "./components/Offer";
import Party from "./components/Party";
import Portfolio from "./components/Portfolio";

function App() {
  return (
    <div className="flex flex-col items-center max-w-[1480px] mx-auto">
      <Header></Header>
      <Discount></Discount>
      <Party></Party>
      <Offer></Offer>
      <Holiday></Holiday>
      <Portfolio></Portfolio>
      <Newsletter></Newsletter>
      <Footer></Footer>
    </div>
  );
}

export default App;
