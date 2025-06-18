import { Link } from "react-router-dom";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";



const ProductListingPage = () => {
    return (
         <>
         <section className="overflow-hidden px-5">
             <h1>Listagem dos produtos</h1>

            <ul className="grid list-none p-0">
                <li className="col-12 md:col-3">
                <div className="shadow-4 p-3 border-round-md">
                    <img className="w-full" src="https://github.com/digitalcollegebr/projeto-digital-store/blob/main/public/produc-image-1.jpeg?raw=true" alt="" />
                <h6>Tênis</h6>
                <Link to={"/produto/1/Nike"}>Jordan 1 Mid White Grey Green</Link>
                <h3><s>R$1.200,00</s> R$800,00</h3>
                </div>
                </li>
                <li><Link to={"/produto/1/Nike"}>Jordan 1 Mid White Grey Green</Link></li>
                <li><Link to={"/produto/2/Adidas"}>Adidas</Link></li>
                <li><Link to={"/produto/3/Puma"}>Puma</Link></li>
                <li><Link to={"/produto/4/New Balance"}>New Balance</Link></li>
                <li><Link to={"/produto/5/Asics"}>Asics</Link></li>
                <li><Link to={"/produto/6/Mizuno"}>Mizuuno</Link></li>
                <li><Link to={"/produto/7/Brooks"}>Brooks</Link></li>
                
            </ul>
         </section>
           
        </>
    );
}

export default ProductListingPage;