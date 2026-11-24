import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-6 py-9 md:grid-cols-3">

        {/* MARCA */}
        <div>
          <h2 className="text-xl">
            COMERCIAL <span className="text-primary">CHÁVEZ</span>
          </h2>

          <p className="mt-3 max-w-xs text-xs leading-6 text-gray-400">
            Todo para tu celebración. Cervezas, licores, refrescos y mucho más.
          </p>
        </div>

        {/* ENLACES */}
        <div>
          <h3 className="mb-3 text-sm font-semibold text-white">
            Enlaces
          </h3>

          <ul className="space-y-2 text-xs text-gray-400">
            <li><Link to="/categoria/cervezas" className="hover:text-white">Cervezas</Link></li>
            <li><Link to="/categoria/licores" className="hover:text-white">Licores</Link></li>
            <li><Link to="/categoria/refrescos" className="hover:text-white">Refrescos</Link></li>
            <li><Link to="/categoria/cigarrillos" className="hover:text-white">Cigarrillos</Link></li>
          </ul>
        </div>

        {/* CONTACTO */}
        <div>
          <h3 className="mb-3 text-sm font-semibold text-white">
            Contacto
          </h3>

          <ul className="space-y-2 text-xs text-gray-400">
            <li>Atención todos los días</li>
            <li>Pedidos al por mayor y menor</li>
            <li>Pedidos por WhatsApp</li>
          </ul>
        </div>

      </div>

      {/* COPYRIGHT */}
      <div className="border-t border-white/10 px-6 py-4 text-center text-[11px] text-gray-500">
        <p>Venta exclusiva a mayores de 18 años.</p>
        <p className="mt-1">
          © {new Date().getFullYear()} Comercial Chávez. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}

export default Footer;