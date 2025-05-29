"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Cookies from "js-cookie";
import {
  MdDashboard,
  MdTableChart,
  MdPayment,
  MdLanguage,
  MdPerson,
  MdPersonAdd,
  MdHelp,
} from "react-icons/md";

interface NavItem {
  name: string;
  path: string;
  icon: React.ReactNode;
}

const mainNavItems: NavItem[] = [
  { name: "Dashboard", path: "/", icon: <MdDashboard size={20} /> },
  { name: "Tables", path: "/tables", icon: <MdTableChart size={20} /> },
  { name: "Billing", path: "/billing", icon: <MdPayment size={20} /> },
  { name: "RTL", path: "/rtl", icon: <MdLanguage size={20} /> },
];

export default function Sidebar() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const token = Cookies.get("tokendashboard");
    console.log(token);
    setIsLoggedIn(!!token);
  }, []);

  if (isLoggedIn === null) return null;

  const accountNavItems: NavItem[] = [
    { name: "Profile", path: "/profile", icon: <MdPerson size={20} /> },
    !isLoggedIn
      ? {
          name: "Sign Up",
          path: "/signup",
          icon: <MdPersonAdd size={20} />,
        }
      : null,
  ].filter(Boolean) as NavItem[];

  return (
    <aside className="fixed left-0 top-0 z-40 mt-5 ml-1 h-[700px] w-[244px] bgshadow rounded-2xl text-white transition-all duration-300">
      <div className="flex h-full flex-col px-4 py-8">
        <div className="mb-8 px-4">
          <h1 className="text-xl font-bold">VISION UI FREE</h1>
        </div>

        <nav className="flex-1">
          <div className="space-y-1">
            {mainNavItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`flex items-center rounded-lg px-4 py-3 text-sm transition-colors ${
                  pathname === item.path
                    ? "bg-blue-500 text-white"
                    : "text-gray-300 hover:bg-blue-500/10"
                }`}
              >
                <span className="mr-3">{item.icon}</span>
                {item.name}
              </Link>
            ))}
          </div>

          <div className="mt-8">
            <h2 className="mb-2 px-4 text-xs font-semibold uppercase text-gray-400">
              ACCOUNT PAGES
            </h2>
            <div className="space-y-1">
              {accountNavItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`flex items-center rounded-lg px-4 py-3 text-sm transition-colors ${
                    pathname === item.path
                      ? "bg-blue-500 text-white"
                      : "text-gray-300 hover:bg-blue-500/10"
                  }`}
                >
                  <span className="mr-3">{item.icon}</span>
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </nav>

        <div className="mt-8 rounded-xl bg-gradient-to-r from-blue-400 to-blue-600 p-4">
          <div className="flex items-center space-x-3">
            <MdHelp size={24} />
            <div>
              <h3 className="font-medium">Need help?</h3>
              <p className="text-sm">Please check our docs</p>
            </div>
          </div>
          <button className="mt-4 w-full rounded-lg bg-white px-4 py-2 text-sm font-medium text-blue-600 transition-colors hover:bg-gray-100">
            DOCUMENTATION
          </button>
        </div>
      </div>
    </aside>
  );
}
