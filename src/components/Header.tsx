import Link from "next/link";
import { MdSearch, MdPerson, MdSettings } from "react-icons/md";
import Breadcrumb from "./Breadcrumb";

export default function Header() {
  return (
    <header className="rounded-2xl bgshadow px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Breadcrumb />
        </div>

        <div className="flex items-center space-x-6">
          <div className="relative">
            <input
              type="text"
              placeholder="Type here..."
              className="pl-10 pr-4 py-2 text-white rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-64"
            />
            <MdSearch
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={20}
            />
          </div>

          <div className="flex items-center space-x-4">
            <Link
              href="/signin"
              className="text-gray-600  flex items-center space-x-1"
            >
              <MdPerson size={20} />
              <span>Sign In</span>
            </Link>
            <button className="text-gray-600 ">
              <MdSettings size={20} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
