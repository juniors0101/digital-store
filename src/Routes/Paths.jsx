import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import ProductListingPage from "../Pages/ProductListingPage";
import ProductViewPage from "../Pages/ProductViewPage";
import PageLayout from "../layouts/PageLayout";
import NotFound from "../Pages/NotFound";

const Paths = () => {
    return (
        <>

            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<PageLayout />}>
                        <Route  element={<HomePage />} />
                        <Route path="/productlistingpage" element={<ProductListingPage />} />
                        <Route path="/productviewpage" element={<ProductViewPage />} />
                    </Route>
                    <Route path="*" element={<NotFound />}/>
                </Routes>

            </BrowserRouter>
        </>
    );
}

export default Paths;