import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <>
        <h3>Opa! Página não encontrada</h3>
        <Link to={"/"}>Voltar</Link>
        </>
     );
}
 
export default NotFound;