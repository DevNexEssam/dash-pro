import HeaderSection from "@/components/HeaderSection";
import Card from "@/components/Card";
import OverviewChart from "@/components/OverviewChart";
import RecentActivity from "@/components/RecentActivity";

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen flex-col space-y-6">
      <div className="flex-1 space-y-4">
        <HeaderSection />

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card
            title="Total Revenue"
            value="$45,231.89"
            percentage="+20.1% from last month"
            percentageColor="text-gray-500"
            progress={75}
          />
          <Card
            title="Subscriptions"
            value="+2350"
            percentage="+180.1%"
            percentageColor="text-green-500"
            progress={65}
          />
          <Card
            title="Sales"
            value="+12,234"
            percentage="+19%"
            percentageColor="text-green-500"
            progress={45}
          />
          <Card
            title="Active Now"
            value="+573"
            percentage="-201"
            percentageColor="text-red-500"
            progress={25}
          />
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
          <OverviewChart />
          <RecentActivity />
        </div>
      </div>
    </div>
  );
}