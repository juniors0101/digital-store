import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import ProductListingPage from "../Pages/ProductListingPage";
import ProductViewPage from "../Pages/ProductViewPage";
import PageLayout from "../layouts/PageLayout";
import NotFound from "../Pages/NotFound";
import Categories from "../Pages/Categories";
import MyOders from "../Pages/MyOders";


const Paths = () => {
    return (
        <>

            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<PageLayout />}>
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