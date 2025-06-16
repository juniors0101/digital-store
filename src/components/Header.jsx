import { Link } from "react-router-dom";

const Header = () => {
    return ( 
        <>
        <header>
            <h1>LOGO</h1>
            <nav>
                <ul>
                    <li><Link to={"/"}>HomePage</Link></li>
                    <li><Link to={"/productlistingpage"}>ProductListingPage</Link></li>
                    <li><Link to={"/productviewpage"}>ProductViewPage</Link></li>
                </ul>
            </nav>
        </header>
        </>
     );
}
 
export default Header;