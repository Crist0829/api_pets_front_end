import { DogIcon, HomeIcon, User } from "lucide-react";
import { NavLink } from "./NavLink";
import { Link } from "react-router-dom";
import logo from '@/assets/petsShow.jpeg';

const menuItems = [
  {
    icon: <HomeIcon className="w-6 h-6" />,
    text: 'Feed',
    href: '/feed',
  },


  {
    icon: <DogIcon />,
    text: 'My Pets',
    href: '/my-pets',
  },

  {
    icon: <User />,
    text: 'Profile',
    href: `/profile`,
  },
];


function NavBar() {
  return (
    <div
      className=" bg-primary shadow shadow-black text-emerald-100 
    static
  md:sticky md:top-0 z-[20000000] md:backdrop-blur-sm bg-opacity-95
  "
    >
      <div className="w-[90%] mx-auto max-w-[1200px]  flex justify-between items-center">
        <div className="flex items-center gap-3 py-3   w-full md:max-w-[500px]">
          {/* Logo */}
          <Link
          className="hover:scale-95  transition rounded-full overflow-hidden"
          to={`/feed`}
        >
          <img
            src={logo}
            alt="Logo de recicanje"
            className=" w-12 md:w-14 lg:w-12"
          />
        </Link>

          {/* Buscador */}
          <input
            type="text"
            placeholder="buscar"
            className="p-1 rounded-md
        w-full 
        "
          />
        </div>

        {/* NAV */}
        <nav
          className="
      fixed bottom-0 shadow-2xl  w-full left-0  
      bg-primary md:bg-inherit z-50
      md:static"
        >
          <ul
            className="flex gap-3 items-end
        justify-between px-5 py-1
        w-full md:max-w-[500px] ml-auto 
        "
          >
            {menuItems.map((item, i) => {
            return (
              <NavLink
                /* activo={item.text === linksAsociados[paginaActiva] || false} */
                className="hover:scale-105 w-[100px] h-[60px] rounded-lg hover:bg-sky-900 "
                item={item}
                key={i}
              />
            );
          })}
          </ul>
        </nav>
      </div>
    </div>
  );
}

export { NavBar };
