import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import ProductListingPage from "../Pages/ProductListingPage";
import ProductViewPage from "../Pages/ProductViewPage";
import Header from "../components/Header";

const Paths = () => {
    return ( 
        <>
        <BrowserRouter>
        <Header />
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/productlistingpage" element={<ProductListingPage />} />
            <Route path="/productviewpage" element={<ProductViewPage />} />
        </Routes>
        </BrowserRouter>
        </>
     );
}
 
export default Paths;