export default function OverviewChart() {
    return (
      <div className="col-span-4 rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
        <div className="mb-4">
          <h3 className="text-lg font-medium">Overview</h3>
          <p className="text-sm text-gray-500">Monthly revenue overview for the current year.</p>
        </div>
        <div className="h-[350px] w-full bg-gray-100 rounded-md flex items-center justify-center">
          <p className="text-gray-500">Chart Visualization</p>
        </div>
      </div>
    );
  }