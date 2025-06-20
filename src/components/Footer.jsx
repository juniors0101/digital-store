import { Divider } from 'primereact/divider';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <>
     <footer className="bg-black text-white px-6 py-10">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8 text-sm">
        {/* Logo e Descrição */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="bg-white text-black font-bold px-2 py-1 rounded">{"</>"}</span>
            <h1 className="text-xl font-semibold">Digital Store</h1>
          </div>
          
          <div className="flex gap-4 mt-4 text-white text-lg">
            <FaFacebookF />
            <FaInstagram />
            <FaTwitter />
          </div>

          <p className="text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore.
          </p>
        </div>

        {/* Informações */}
        <div>
          <h2 className="font-semibold mb-3">Informação</h2>
          <ul className="space-y-2 text-gray-400">
            <li>Sobre Drip Store</li>
            <li>Segurança</li>
            <li>Wishlist</li>
            <li>Blog</li>
            <li>Trabalhe conosco</li>
            <li>Meus Pedidos</li>
          </ul>
        </div>

        {/* Categorias */}
        <div>
          <h2 className="font-semibold mb-3">Categorias</h2>
          <ul className="space-y-2 text-gray-400">
            <li>Camisetas</li>
            <li>Calças</li>
            <li>Bonés</li>
            <li>Headphones</li>
            <li>Tênis</li>
          </ul>
        </div>

        {/* Contato */}
        <div>
          <h2 className="font-semibold mb-3">Contato</h2>
          <p className="text-gray-400">
            Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161
          </p>
          <p className="text-gray-400 mt-2">(85) 3051-3411</p>
        </div>
      </div>

      <Divider className="my-6 border-gray-700" />

      <div className="text-center text-gray-500 text-xs">
        @ 2022 Digital College
      </div>
    </footer>
        </>
    );
}

export default Footer;