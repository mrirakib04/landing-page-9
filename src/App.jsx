import "./App.css";
import Header from "./components/Header";
import Discount from "./components/Discount";
import Party from "./components/Party";
import Offer from "./components/Offer";
import Holiday from "./components/Holiday";
import Portfolio from "./components/Portfolio";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";

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
