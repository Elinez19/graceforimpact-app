import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import menuData from "./menuData";

const Header = () => {
  const [navigationOpen, setNavigationOpen] = useState(false);
  const [dropdownToggler, setDropdownToggler] = useState(false);
  const [stickyMenu, setStickyMenu] = useState(false);

  const pathUrl = usePathname();

  // Sticky menu
  const handleStickyMenu = () => {
    if (window.scrollY >= 80) {
      setStickyMenu(true);
    } else {
      setStickyMenu(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleStickyMenu);
    return () => {
      window.removeEventListener("scroll", handleStickyMenu);
    };
  }, []);

  return (
    <header
      className={`fixed left-0 top-0 z-99999 w-full py-5 bg-white shadow-md ${
        stickyMenu ? "shadow-lg py-4 transition duration-100" : ""
      }`}>
      <div className="relative mx-auto max-w-screen-lg items-center justify-between px-4 md:px-8 xl:flex 2xl:px-0">
        <div className="flex w-full items-center justify-between xl:w-1/4">
          <a href="/">
            <Image
              src="/images/logo/logo.svg"
              alt="logo"
              width={150}
              height={75}
              className="w-[150px] h-[75px]"
            />
          </a>

          {/* <!-- Hamburger Toggle BTN --> */}
          <button
            aria-label="hamburger Toggler"
            className="block xl:hidden"
            onClick={() => setNavigationOpen(!navigationOpen)}>
            <span className="relative block h-5.5 w-5.5 cursor-pointer">
              <span className="absolute right-0 block h-full w-full">
                <span
                  className={`relative left-0 top-0 my-1 block h-0.5 rounded-sm bg-purple delay-[0] duration-200 ease-in-out ${
                    !navigationOpen ? "!w-full delay-300" : "w-0"
                  }`}></span>
                <span
                  className={`relative left-0 top-0 my-1 block h-0.5 rounded-sm bg-purple delay-150 duration-200 ease-in-out ${
                    !navigationOpen ? "delay-400 !w-full" : "w-0"
                  }`}></span>
                <span
                  className={`relative left-0 top-0 my-1 block h-0.5 rounded-sm bg-purple delay-200 duration-200 ease-in-out ${
                    !navigationOpen ? "!w-full delay-500" : "w-0"
                  }`}></span>
              </span>
              <span className="du-block absolute right-0 h-full w-full rotate-45">
                <span
                  className={`absolute left-2.5 top-0 block h-full w-0.5 rounded-sm bg-purple delay-300 duration-200 ease-in-out ${
                    !navigationOpen ? "!h-0 delay-[0]" : "h-full"
                  }`}></span>
                <span
                  className={`delay-400 absolute left-0 top-2.5 block h-0.5 w-full rounded-sm bg-purple duration-200 ease-in-out ${
                    !navigationOpen ? "!h-0 delay-200" : "h-0.5"
                  }`}></span>
              </span>
            </span>
          </button>
          {/* <!-- Hamburger Toggle BTN --> */}
        </div>

        {/* Nav Menu Start */}
        <div
          className={`invisible h-0 w-full items-center justify-between xl:visible xl:flex xl:h-auto xl:w-full ${
            navigationOpen &&
            "navbar !visible mt-4 h-auto max-h-[400px] rounded-md bg-white p-7.5 shadow-solid-5"
          }`}>
          <nav>
            <ul className="flex flex-col gap-5 xl:flex-row xl:items-center xl:gap-10">
              {menuData.map((menuItem, key) => (
                <li key={key} className={menuItem.submenu && "group relative"}>
                  {menuItem.submenu ? (
                    <>
                      <button
                        onClick={() => setDropdownToggler(!dropdownToggler)}
                        className="flex text-purple cursor-pointer items-center justify-between gap-3 hover:text-orange">
                        {menuItem.title}
                        <span>
                          <svg
                            className="h-3 w-3 cursor-pointer fill-purple group-hover:fill-orange"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512">
                            <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
                          </svg>
                        </span>
                      </button>

                      <ul
                        className={`bg-white dropdown ${
                          dropdownToggler ? "flex bg-white" : ""
                        }`}>
                        {menuItem.submenu.map((item, key) => (
                          <li
                            key={key}
                            className="hover:bg-orange text-purple hover:text-white rounded-md px-2">
                            <Link href={item.path || "#"}>{item.title}</Link>
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : (
                    <Link
                      href={`${menuItem.path}`}
                      className={
                        pathUrl === menuItem.path
                          ? "text-orange hover:text-orange"
                          : "hover:text-orange"
                      }>
                      {menuItem.title}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <div className="mt-7 flex items-center gap-6 xl:mt-0">
            <Link
              href="https://www.zeffy.com/donation-form/99592ceb-8dd2-41ab-9bd4-705723eed299"
              className="flex items-center justify-center rounded-lg bg-purple px-5 py-2 text-sm text-white duration-300 ease-in-out hover:bg-orange/80">
              Get Involved
            </Link>
            <Link
              href="https://www.zeffy.com/donation-form/99592ceb-8dd2-41ab-9bd4-705723eed299"
              className="flex items-center justify-center rounded-lg bg-orange px-5 py-2 text-sm text-white duration-300 ease-in-out hover:bg-purple/80">
              Donate
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
