import Link from "next/link";
import { FaChartLine } from "react-icons/fa";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0 px-4">
        <div className="flex gap-6 md:gap-10">
          <Link href="/" className="flex items-center space-x-2">
            <FaChartLine className="h-6 w-6 text-blue-600" />
            <span className="inline-block font-bold">DashPro</span>
          </Link>
          <nav className="hidden gap-6 md:flex">
            <Link href="#features" className="flex items-center text-sm font-medium text-gray-500 transition-colors hover:text-blue-600">
              Features
            </Link>
            <Link href="#testimonials" className="flex items-center text-sm font-medium text-gray-500 transition-colors hover:text-blue-600">
              Testimonials
            </Link>
            <Link href="#pricing" className="flex items-center text-sm font-medium text-gray-500 transition-colors hover:text-blue-600">
              Pricing
            </Link>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-2">
            <Link href="/login" className="text-sm font-medium text-gray-500 transition-colors hover:text-blue-600">
              Login
            </Link>
            <Link href="/dashboard">
              <span className="inline-flex h-10 items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2">
                Get Started
              </span>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}