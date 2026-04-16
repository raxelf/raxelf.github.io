import Link from "next/link";
import NavListComponent from "./NavList";

import { RiGithubFill, RiLinkedinBoxFill } from "@remixicon/react";

const thisYear = new Date().getFullYear();

const FooterComponent = () => {
  return (
    <footer className="w-full md:px-12 md:py-8 p-6">
      <div className="w-full flex flex-col md:flex-row justify-between md:gap-4 gap-8">
        <div className="flex-col flex gap-4">
          {/* brand name */}
          <Link
            href="/"
            className="font-bold hover:text-primary-hover active:text-primary-active"
          >
            @raxelf
          </Link>

          {/* social link */}
          <div className="flex gap-4">
            <Link href={"https://www.linkedin.com/in/raxelf/"} target="_blank">
              <RiLinkedinBoxFill
                size={24}
                className="hover:text-primary active:text-primary-active cursor-pointer"
              />
            </Link>
            <Link href={"https://github.com/raxelf"} target="_blank">
              <RiGithubFill
                size={24}
                className="hover:text-primary active:text-primary-active cursor-pointer"
              />
            </Link>
          </div>
        </div>

        {/* footer nav */}
        <nav className="flex md:gap-8 gap-6 flex-wrap items-start">
          <NavListComponent />
        </nav>
      </div>

      <hr className="text-gray-200 mt-6"/>

      <div className="flex w-full mt-6 md:justify-center">
        <p className="text-gray-400">© {thisYear} raxelf. Built with ❤️</p>
      </div>
    </footer>
  );
};

export default FooterComponent;
