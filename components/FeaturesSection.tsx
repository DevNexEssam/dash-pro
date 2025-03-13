import { FaShieldAlt, FaBolt, FaChartLine, FaUsers, FaGlobe, FaLightbulb } from "react-icons/fa";

export default function FeaturesSection() {
  const features = [
    {
      icon: <FaShieldAlt className="h-8 w-8 text-blue-600" />,
      title: "Enterprise Security",
      description: "Enterprise-grade security with advanced encryption to protect your sensitive data and ensure compliance.",
    },
    {
      icon: <FaBolt className="h-8 w-8 text-blue-600" />,
      title: "Lightning Fast",
      description: "Lightning-fast performance with real-time data updates and optimized queries for instant insights.",
    },
    {
      icon: <FaChartLine className="h-8 w-8 text-blue-600" />,
      title: "Advanced Analytics",
      description: "Comprehensive analytics with customizable dashboards to track your key business metrics and KPIs.",
    },
    {
      icon: <FaUsers className="h-8 w-8 text-blue-600" />,
      title: "Team Collaboration",
      description: "Seamless team collaboration with shared dashboards, comments, and role-based permissions.",
    },
    {
      icon: <FaGlobe className="h-8 w-8 text-blue-600" />,
      title: "Global Insights",
      description: "Track global metrics and get insights into regional performance with geographic data visualization.",
    },
    {
      icon: <FaLightbulb className="h-8 w-8 text-blue-600" />,
      title: "AI-Powered Insights",
      description: "Get intelligent recommendations and predictive analytics powered by our advanced AI algorithms.",
    },
  ];

  return (
    <section id="features" className="container mx-auto space-y-12 py-16 px-4">
      <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
        <div className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
          <span>Powerful Features</span>
        </div>
        <h2 className="text-3xl font-bold leading-[1.1] sm:text-4xl md:text-5xl">Everything You Need</h2>
        <p className="max-w-[85%] leading-normal text-gray-500 sm:text-lg sm:leading-7">
          Our dashboard comes with everything you need to analyze and improve your business performance.
        </p>
      </div>
      <div className="mx-auto grid justify-center gap-8 sm:grid-cols-2 md:max-w-[64rem] lg:grid-cols-3">
        {features.map((feature, index) => (
          <div key={index} className="relative overflow-hidden rounded-xl border border-blue-100 bg-white p-2 shadow-lg transition-all hover:shadow-xl">
            <div className="absolute top-0 right-0 h-20 w-20 bg-gradient-to-bl from-blue-600/20 to-transparent rounded-bl-full"></div>
            <div className="flex h-[220px] flex-col justify-between rounded-lg p-6">
              <div className="rounded-full bg-blue-50 p-3 w-fit">{feature.icon}</div>
              <div className="space-y-4">
                <h3 className="text-xl font-bold">{feature.title}</h3>
                <p className="text-gray-500">{feature.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}