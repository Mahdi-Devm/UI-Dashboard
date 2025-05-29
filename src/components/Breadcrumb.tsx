"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Breadcrumb() {
  const pathname = usePathname();

  const segments = pathname.split("/").filter(Boolean);

  return (
    <nav className="text-sm text-gray-400">
      <ol className="flex space-x-1">
        <li>
          <Link href="/" className="hover:underline">
            Dashboard
          </Link>
          <span className="mx-1">/</span>
        </li>
        {segments.map((segment, index) => {
          const href = "/" + segments.slice(0, index + 1).join("/");
          const isLast = index === segments.length - 1;

          return (
            <li key={href} className="capitalize">
              {isLast ? (
                <span className="text-gray-900">{segment}</span>
              ) : (
                <>
                  <Link href={href} className="hover:underline">
                    {segment}
                  </Link>
                  <span className="mx-1">/</span>
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
