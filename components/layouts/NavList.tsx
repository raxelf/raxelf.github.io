import Link from "next/link";

const navLists = ["projects", "skills", "about", "experience", "contact"];

const NavListComponent = () => {
  return (
    <>
      {navLists.map((navList, idx) => (
        <Link
          key={navList + idx}
          href={`#${navList}`}
          className="capitalize text-gray-400 font-semibold hover:text-primary transition delay-75"
        >
          {navList}
        </Link>
      ))}
    </>
  );
};

export default NavListComponent;
