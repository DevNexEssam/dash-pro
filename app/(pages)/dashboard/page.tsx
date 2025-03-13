import { FaChartLine } from "react-icons/fa"

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen flex-col space-y-6">
      <div className="flex-1 space-y-4">
        <div className="mb-8 flex flex-col gap-2">
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-gray-500">View your analytics and track your business performance.</p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {/* Card 1 */}
          <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
            <div className="flex flex-row items-center justify-between space-y-0 pb-2">
              <h3 className="text-sm font-medium text-gray-500">Total Revenue</h3>
              <FaChartLine className="h-4 w-4 text-gray-500" />
            </div>
            <div className="text-2xl font-bold">$45,231.89</div>
            <p className="text-xs text-gray-500">+20.1% from last month</p>
            <div className="mt-4 h-1 w-full rounded-full bg-gray-200">
              <div className="h-1 w-[75%] rounded-full bg-blue-600"></div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
            <div className="flex flex-row items-center justify-between space-y-0 pb-2">
              <h3 className="text-sm font-medium text-gray-500">Subscriptions</h3>
              <FaChartLine className="h-4 w-4 text-gray-500" />
            </div>
            <div className="text-2xl font-bold">+2350</div>
            <p className="text-xs text-green-500">+180.1%</p>
            <div className="mt-4 h-1 w-full rounded-full bg-gray-200">
              <div className="h-1 w-[65%] rounded-full bg-blue-600"></div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
            <div className="flex flex-row items-center justify-between space-y-0 pb-2">
              <h3 className="text-sm font-medium text-gray-500">Sales</h3>
              <FaChartLine className="h-4 w-4 text-gray-500" />
            </div>
            <div className="text-2xl font-bold">+12,234</div>
            <p className="text-xs text-green-500">+19%</p>
            <div className="mt-4 h-1 w-full rounded-full bg-gray-200">
              <div className="h-1 w-[45%] rounded-full bg-blue-600"></div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
            <div className="flex flex-row items-center justify-between space-y-0 pb-2">
              <h3 className="text-sm font-medium text-gray-500">Active Now</h3>
              <FaChartLine className="h-4 w-4 text-gray-500" />
            </div>
            <div className="text-2xl font-bold">+573</div>
            <p className="text-xs text-red-500">-201</p>
            <div className="mt-4 h-1 w-full rounded-full bg-gray-200">
              <div className="h-1 w-[25%] rounded-full bg-blue-600"></div>
            </div>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
          {/* Overview Chart */}
          <div className="col-span-4 rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
            <div className="mb-4">
              <h3 className="text-lg font-medium">Overview</h3>
              <p className="text-sm text-gray-500">Monthly revenue overview for the current year.</p>
            </div>
            <div className="h-[350px] w-full bg-gray-100 rounded-md flex items-center justify-center">
              <p className="text-gray-500">Chart Visualization</p>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="col-span-3 rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
            <div className="mb-4">
              <h3 className="text-lg font-medium">Recent Activity</h3>
              <p className="text-sm text-gray-500">Your recent activity and events.</p>
            </div>
            <div className="space-y-8">
              {[1, 2, 3, 4, 5].map((i) => (
                <div className="flex items-center" key={i}>
                  <div className="space-y-1">
                    <p className="text-sm font-medium leading-none">New subscription from Customer #{i}</p>
                    <p className="text-sm text-gray-500">
                      {i} hour{i !== 1 ? "s" : ""} ago
                    </p>
                  </div>
                  <div className="ml-auto font-medium">+${i * 100}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

