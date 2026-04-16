import Link from "next/link";
import NavListComponent from "./NavList";

const thisYear = new Date().getFullYear();

const FooterComponent = () => {
  return (
    <footer className="w-full p-12">
      <div className="w-full flex justify-between items-center">
        {/* brand name */}
        <Link
          href="/"
          className="font-bold hover:text-primary-hover active:text-primary-active"
        >
          @raxelf
        </Link>

        {/* footer nav */}
        <nav className="flex gap-8 items-center">
          <NavListComponent />
        </nav>

        <div className="flex">
          <p className="text-gray-400">© {thisYear} raxelf. Built with ❤️</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
