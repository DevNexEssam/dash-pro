import type React from "react";
import Link from "next/link";
import { FaChartLine, FaUser, FaCog, FaChartBar, FaBell } from "react-icons/fa";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 border-b border-gray-200 bg-white">
        <div className="container mx-auto flex h-16 items-center justify-between py-4 px-4">
          <div className="flex items-center gap-2 md:hidden">
            <FaChartLine className="h-6 w-6 text-blue-600" />
            <span className="font-bold">DashPro</span>
          </div>
          <div className="flex items-center gap-2 md:ml-auto">
            {/* User Nav (Static) */}
            <div className="relative">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-gray-900 hover:bg-gray-200">
                <FaUser className="h-4 w-4" />
              </span>
            </div>
          </div>
        </div>
      </header>
      <div className="container mx-auto flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10 px-4">
        <aside className="hidden md:block">
          <div className="flex h-14 items-center border-b border-gray-200 px-4">
            <div className="flex items-center gap-2">
              <FaChartLine className="h-6 w-6 text-blue-600" />
              <span className="font-bold">DashPro</span>
            </div>
          </div>
          <div className="overflow-y-auto py-4">
            <nav className="space-y-1">
              <Link
                href="/dashboard"
                className="flex items-center rounded-md px-3 py-2 text-sm font-medium transition-colors bg-blue-100 text-blue-700"
              >
                <span className="mr-3 text-blue-700">
                  <FaChartLine className="h-4 w-4" />
                </span>
                Dashboard
              </Link>
              <Link
                href="/dashboard/analytics"
                className="flex items-center rounded-md px-3 py-2 text-sm font-medium transition-colors text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              >
                <span className="mr-3 text-gray-500">
                  <FaChartBar className="h-4 w-4" />
                </span>
                Analytics
              </Link>
              <Link
                href="/dashboard/notifications"
                className="flex items-center rounded-md px-3 py-2 text-sm font-medium transition-colors text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              >
                <span className="mr-3 text-gray-500">
                  <FaBell className="h-4 w-4" />
                </span>
                Notifications
              </Link>
              <Link
                href="/dashboard/settings"
                className="flex items-center rounded-md px-3 py-2 text-sm font-medium transition-colors text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              >
                <span className="mr-3 text-gray-500">
                  <FaCog className="h-4 w-4" />
                </span>
                Settings
              </Link>
            </nav>
          </div>
          <div className="border-t border-gray-200 p-4">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
                <FaUser className="h-4 w-4 text-blue-600" />
              </div>
              <div>
                <p className="text-sm font-medium">Essam Mohamed</p>
                <p className="text-xs text-gray-500">Essam@example.com</p>
              </div>
            </div>
          </div>
        </aside>
        <main className="flex w-full flex-col overflow-hidden p-4 md:p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
