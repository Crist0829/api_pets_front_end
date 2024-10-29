import { ReactNode } from "react";
import { Link } from "react-router-dom";

interface PropsItem {
  href: string;
  icon: ReactNode;
  text: string;
}

interface Props {
  item: PropsItem;
  active?: boolean;
  className?: string;
}

function NavLink({ item, active = false, className = "" }: Props) {
  return (
    <div
      className={`flex flex-col justify-center items-center w-[100px] h-[60px] ${
        active ? " bg-sky-800 scale-95" : ""
      }
          ${className} transition-all
        `}
    >
      <Link
        className="flex flex-col justify-center w-full h-full items-center"
        to={item.href}
      >
        {item.icon}
        <span>{item.text}</span>
      </Link>
    </div>
  );
}

export { NavLink };
