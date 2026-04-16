import Link from "next/link";
import CustomButton from "../ui/button";
import NavListComponent from "./NavList";

const Navbar = () => {
  return (
    <nav className="w-full px-8 py-4 shadow-sm border border-gray-200">
      <div className="flex justify-between items-center">
        {/* brand/web logo things */}
        <Link
          href="/"
          className="font-bold hover:text-primary-hover active:text-primary-active"
        >
          @raxelf
        </Link>

        {/* navigation lists */}
        <div className="flex gap-8 items-center">
          <NavListComponent />

          <CustomButton
            text={"Download CV"}
            bg={true}
            action="/Rafael Axel Frananda - CV.pdf"
            newTab
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
