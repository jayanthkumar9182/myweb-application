import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Center from "./components/center/Center";
import Navbar from "./components/navbar/Navbar";
import Categories from "./components/categories/Categories";
import Carousel from "./components/carousel/Carousel";
import MyInterceptors1 from "./components/interseptors/MyInterceptors1";
import MyInterceptors2 from "./components/interseptors/MyInterceptors2";
import { Route, Routes } from "react-router-dom";
import Home from "./components/home/HomePage"
import About from "./components/about/AboutPage";
import Careers from "./components/careers/CareersPage";
import NotFoundPage from "./components/notFound/NotFoundPage";
import GetProductDetailsDemo from "./components/apiCalls/GetProductDetailsDemo";
import ProductDetails from "./components/products/ProductDetails";
import ProductDetail from "./components/products/ProductDetail";
import Permanentjobs from "./components/careers/Permanentjobs";
import Contractjobs from "./components/careers/Contractjobs";
import Protectedrouts from "./components/utils/Protectedrouts";
import HomePage from "./components/miniproject/HomePage";




export default function App() {
  //MyInterceptors1();
  //MyInterceptors2();
  return (
    <div className="App">
      {/*<Header />
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/aboutus" element={<About />} />
        <Route exact path="/careers" element={<Careers />}>
          <Route path ="/careers/Permanentjobs" element={<Permanentjobs/>}/>
          <Route path ="/careers/Contractjobs" element={<Contractjobs/>}/>
        </Route>
        <Route exact path="/products" element={
        <Protectedrouts>
          <GetProductDetailsDemo />
        </Protectedrouts>} />
        <Route path="/productdetails/:id" element={<ProductDetails />} />
        <Route path="/productdetail" element={<ProductDetail />} />
        <Route path="*" element={<NotFoundPage />} /> (No Match Route)
      </Routes>
     
        <Center />
     
        
        <Footer />*/}
        <HomePage />
    </div>
  );
}
