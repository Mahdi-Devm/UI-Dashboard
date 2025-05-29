import Link from "next/link";

export default function Footer() {
  return (
    <footer className=" rounded-2xl bgshadow px-6 py-4 mt-auto">
      <div className="flex items-center justify-between">
        <div className="text-sm text-gray-600">
          © 2021, Made with ❤️ by{" "}
          <Link href="#" className="text-blue-600 hover:text-blue-700">
            Simmmple
          </Link>{" "}
          &{" "}
          <Link href="#" className="text-blue-600 hover:text-blue-700">
            Creative Tim
          </Link>{" "}
          for a better web
        </div>
        <div className="flex items-center space-x-4 text-sm">
          <Link href="#" className="text-gray-400 hover:text-gray-900">
            Marketplace
          </Link>
          <Link href="#" className="text-gray-400 hover:text-gray-900">
            Blog
          </Link>
          <Link href="#" className="text-gray-400 hover:text-gray-900">
            License
          </Link>
        </div>
      </div>
    </footer>
  );
}
