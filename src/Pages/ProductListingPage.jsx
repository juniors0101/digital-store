import { Link } from "react-router-dom";

const ProductListingPage = () => {
    return (
        <>
            <h1>Listagem dos produtos</h1>
            <ul>
                <li><Link to={"/ProductViewPage/1/Nike"}>Nike</Link></li>
                <li><Link to={"/ProductViewPage/2/Adidas"}>Adidas</Link></li>
                <li><Link to={"/ProductViewPage/3/Puma"}>Puma</Link></li>
                <li><Link to={"/ProductViewPage/4/New Balance"}>New Balance</Link></li>
                <li><Link to={"/ProductViewPage/5/Asics"}>Asics</Link></li>
                <li><Link to={"/ProductViewPage/6/Mizuno"}>Mizuuno</Link></li>
                <li><Link to={"/ProductViewPage/7/Brooks"}>Brooks</Link></li>
                
            </ul>
        </>
    );
}

export default ProductListingPage;