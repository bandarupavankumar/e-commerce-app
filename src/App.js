import Footer from "./components/Footer";
import Header from "./components/Header";
import Map from "./components/Map";
import MyMarquee from "./components/MyMarquee";
import Product from "./components/Product";


const App = () => {
  return (
    <div className="">
      <MyMarquee/>
      <Header/>
      <Product/>
      <Map/>
      <Footer/>
    </div>
  );
};

export default App;
