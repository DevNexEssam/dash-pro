export default function RecentActivity() {
    return (
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
    );
  }