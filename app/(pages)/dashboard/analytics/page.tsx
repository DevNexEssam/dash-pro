export default function AnalyticsPage() {
    return (
      <div className="flex min-h-screen flex-col space-y-6">
        <div className="flex-1 space-y-4">
          <div className="mb-8 flex flex-col gap-2">
            <h1 className="text-3xl font-bold tracking-tight">Analytics</h1>
            <p className="text-gray-500">Detailed analytics and reports for your business.</p>
          </div>
  
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {/* Conversions Chart */}
            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
              <div className="mb-4">
                <h3 className="text-lg font-medium">Conversions</h3>
                <p className="text-sm text-gray-500">Monthly conversion rate</p>
              </div>
              <div className="h-[200px] w-full bg-gray-100 rounded-md flex items-center justify-center">
                <p className="text-gray-500">Line Chart</p>
              </div>
            </div>
  
            {/* Weekly Traffic */}
            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
              <div className="mb-4">
                <h3 className="text-lg font-medium">Weekly Traffic</h3>
                <p className="text-sm text-gray-500">Daily website visitors</p>
              </div>
              <div className="h-[200px] w-full bg-gray-100 rounded-md flex items-center justify-center">
                <p className="text-gray-500">Area Chart</p>
              </div>
            </div>
  
            {/* Device Distribution */}
            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
              <div className="mb-4">
                <h3 className="text-lg font-medium">Device Distribution</h3>
                <p className="text-sm text-gray-500">User device breakdown</p>
              </div>
              <div className="h-[200px] w-full bg-gray-100 rounded-md flex items-center justify-center">
                <p className="text-gray-500">Pie Chart</p>
              </div>
              <div className="mt-4 flex justify-center gap-4">
                <div className="flex items-center">
                  <div className="mr-2 h-3 w-3 rounded-full bg-blue-600" />
                  <span className="text-sm">Desktop</span>
                </div>
                <div className="flex items-center">
                  <div className="mr-2 h-3 w-3 rounded-full bg-blue-400" />
                  <span className="text-sm">Mobile</span>
                </div>
                <div className="flex items-center">
                  <div className="mr-2 h-3 w-3 rounded-full bg-blue-200" />
                  <span className="text-sm">Tablet</span>
                </div>
              </div>
            </div>
          </div>
  
          <div className="mt-4">
            <div className="rounded-lg border border-gray-200 bg-white shadow-sm">
              <div className="p-6">
                <h3 className="text-lg font-medium">Recent Transactions</h3>
                <p className="text-sm text-gray-500">A list of your recent transactions.</p>
              </div>
              <div className="px-6">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="border-b border-gray-200">
                      <tr>
                        <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Invoice</th>
                        <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Status</th>
                        <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Email</th>
                        <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Amount</th>
                        <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-200">
                        <td className="px-4 py-3 text-sm">INV001</td>
                        <td className="px-4 py-3 text-sm">
                          <div className="flex items-center">
                            <div className="mr-2 h-2 w-2 rounded-full bg-blue-500" />
                            <span className="capitalize">pending</span>
                          </div>
                        </td>
                        <td className="px-4 py-3 text-sm">user1@example.com</td>
                        <td className="px-4 py-3 text-sm">$125.00</td>
                        <td className="px-4 py-3 text-sm">2023-01-01</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="px-4 py-3 text-sm">INV002</td>
                        <td className="px-4 py-3 text-sm">
                          <div className="flex items-center">
                            <div className="mr-2 h-2 w-2 rounded-full bg-yellow-500" />
                            <span className="capitalize">processing</span>
                          </div>
                        </td>
                        <td className="px-4 py-3 text-sm">user2@example.com</td>
                        <td className="px-4 py-3 text-sm">$250.00</td>
                        <td className="px-4 py-3 text-sm">2023-01-11</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="px-4 py-3 text-sm">INV003</td>
                        <td className="px-4 py-3 text-sm">
                          <div className="flex items-center">
                            <div className="mr-2 h-2 w-2 rounded-full bg-green-500" />
                            <span className="capitalize">success</span>
                          </div>
                        </td>
                        <td className="px-4 py-3 text-sm">user3@example.com</td>
                        <td className="px-4 py-3 text-sm">$450.00</td>
                        <td className="px-4 py-3 text-sm">2023-01-15</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="px-4 py-3 text-sm">INV004</td>
                        <td className="px-4 py-3 text-sm">
                          <div className="flex items-center">
                            <div className="mr-2 h-2 w-2 rounded-full bg-red-500" />
                            <span className="capitalize">failed</span>
                          </div>
                        </td>
                        <td className="px-4 py-3 text-sm">user4@example.com</td>
                        <td className="px-4 py-3 text-sm">$550.00</td>
                        <td className="px-4 py-3 text-sm">2023-01-20</td>
                      </tr>
                      <tr className="border-b border-gray-200 last:border-0">
                        <td className="px-4 py-3 text-sm">INV005</td>
                        <td className="px-4 py-3 text-sm">
                          <div className="flex items-center">
                            <div className="mr-2 h-2 w-2 rounded-full bg-green-500" />
                            <span className="capitalize">success</span>
                          </div>
                        </td>
                        <td className="px-4 py-3 text-sm">user5@example.com</td>
                        <td className="px-4 py-3 text-sm">$750.00</td>
                        <td className="px-4 py-3 text-sm">2023-01-25</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="flex items-center justify-end space-x-2 py-4">
                  <button className="inline-flex h-9 items-center justify-center rounded-md border border-gray-200 bg-white px-4 text-sm font-medium text-gray-900 transition-colors hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
                    Previous
                  </button>
                  <button className="inline-flex h-9 items-center justify-center rounded-md border border-gray-200 bg-white px-4 text-sm font-medium text-gray-900 transition-colors hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  