import Link from "next/link";
import CustomButton from "../ui/button";

const navLists = ["projects", "skills", "about", "experience", "contact"];

const Navbar = () => {
  return (
    <nav className="w-full px-8 py-4 shadow-sm border border-gray-200">
      <div className="flex justify-between items-center">
        {/* brand/web logo things */}
        <Link href="/" className="font-bold hover:text-primary-hover active:text-primary-active">
          @raxelf
        </Link>

        {/* navigation lists */}
        <div className="flex gap-8 items-center">
          {navLists.map((navList, idx) => (
            <Link
              key={navList + idx}
              href={`#${navList}`}
              className="capitalize text-gray-400 font-semibold hover:text-primary transition delay-75"
            >
              {navList}
            </Link>
          ))}

          <CustomButton text={"Download CV"} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
