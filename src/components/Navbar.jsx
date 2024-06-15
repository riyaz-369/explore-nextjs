"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const Navbar = () => {
  const pathName = usePathname();
  const router = useRouter();

  const links = [
    {
      tittle: "About",
      path: "/about",
    },
    {
      tittle: "Service",
      path: "/services",
    },
    {
      tittle: "Contact",
      path: "/contact",
    },
    {
      tittle: "Blogs",
      path: "/blogs",
    },
    {
      tittle: "Categories",
      path: "/categories",
    },
    {
      tittle: "Dashboard",
      path: "/dashboard",
    },
  ];

  const handleLogin = () => {
    router.push("/login");
  };

  if (pathName.includes("dashboard")) {
    return <div className="bg-blue-500 p-6">Dashboard layout</div>;
  }

  return (
    <nav className="bg-blue-500 px-6 py-2 flex justify-between">
      <h3>First NextJS</h3>
      <ul className="flex gap-5">
        {links.map((link) => (
          <Link
            className={`${pathName === link.path && "text-white font-bold"}`}
            key={link.path}
            href={link.path}
          >
            {link.tittle}
          </Link>
        ))}
      </ul>
      <button
        onClick={handleLogin}
        className="bg-white p-2 rounded-lg hover:bg-black hover:text-white transition-all"
      >
        Login
      </button>
    </nav>
  );
};

export default Navbar;
