import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ProductListingPage from "../pages/ProductListingPage";
import ProductViewPage from "../pages/ProductViewPage";
import Layout from "./Layout/Layout";
import NotFound from "../pages/NotFound";
import Categories from "../pages/Categories";
import MyOders from "../pages/MyOders";


const Paths = () => {
    return (
        <>

            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/produtos" element={<ProductListingPage />} />
                        <Route path="/produto/:id/:nome" element={<ProductViewPage />} />
                        <Route path="/categorias" element={<Categories />} />
                         <Route path="/meus-pedidos" element={<MyOders />} />
                    </Route>
                    <Route path="*" element={<NotFound />}/>
                </Routes>
    
            </BrowserRouter>
        </>
    );
}

export default Paths;