import Link from "next/link";
import { FaCheckCircle } from "react-icons/fa";

export default function PricingSection() {
  const plans = [
    {
      title: "Starter",
      price: "$29",
      description: "Perfect for small businesses just getting started with analytics.",
      features: [
        "Basic analytics dashboard",
        "Up to 5 team members",
        "30-day data history",
        "5 custom reports",
        "Email support",
      ],
      cta: "Get Started",
    },
    {
      title: "Pro",
      price: "$79",
      description: "For growing businesses that need more advanced analytics.",
      features: [
        "Advanced analytics dashboard",
        "Up to 20 team members",
        "1-year data history",
        "Unlimited custom reports",
        "Priority email support",
        "API access",
      ],
      cta: "Get Started",
      popular: true,
    },
    {
      title: "Enterprise",
      price: "$199",
      description: "For large organizations with complex analytics needs.",
      features: [
        "Enterprise-grade analytics",
        "Unlimited team members",
        "Unlimited data history",
        "Dedicated support",
        "Custom integrations",
        "On-premise deployment option",
      ],
      cta: "Contact Sales",
    },
  ];

  return (
    <section id="pricing" className="container mx-auto space-y-8 py-16 px-4">
      <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
        <div className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
          <span>Flexible Plans</span>
        </div>
        <h2 className="text-3xl font-bold leading-[1.1] sm:text-4xl md:text-5xl">Simple, Transparent Pricing</h2>
        <p className="max-w-[85%] leading-normal text-gray-500 sm:text-lg sm:leading-7">
          Choose the plan that&apos;s right for your business. All plans include a 14-day free trial.
        </p>
      </div>
      <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:gap-10">
        {plans.map((plan, index) => (
          <div key={index} className={`flex flex-col rounded-xl border ${plan.popular ? "border-2 border-blue-600" : "border-blue-100"} bg-white shadow-lg transition-all hover:shadow-xl overflow-hidden relative`}>
            {plan.popular && (
              <div className="absolute top-0 right-0 left-0 bg-blue-600 text-white text-center text-sm py-1 font-medium">
                Most Popular
              </div>
            )}
            <div className="p-6 pb-0 mt-6">
              <h3 className="text-xl font-bold">{plan.title}</h3>
              <div className="mt-4 flex items-baseline">
                <span className="text-4xl font-bold tracking-tight">{plan.price}</span>
                <span className="ml-1 text-sm font-medium text-gray-500">/month</span>
              </div>
              <p className="mt-4 text-gray-500">{plan.description}</p>
            </div>
            <div className="flex-1 p-6">
              <ul className="space-y-3">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <FaCheckCircle className="h-5 w-5 text-green-500" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-6 pt-0">
              <Link href="/dashboard">
                <span className="w-full inline-flex h-10 items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2">
                  {plan.cta}
                </span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}