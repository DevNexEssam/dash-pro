import Image from "next/image";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah Essamson",
      role: "CEO, TechStart",
      quote:
        "This dashboard has completely transformed how we track our business metrics. The interface is intuitive and the insights are invaluable. We've increased our revenue by 27% since implementing DashPro.",
      image: "/man.png",
    },
    {
      name: "Michael Chen",
      role: "CTO, DataFlow",
      quote:
        "The real-time analytics have helped us identify trends and make data-driven decisions faster than ever before. The AI-powered insights are like having an extra analyst on the team.",
      image: "/man.png",
    },
    {
      name: "Jennifer Lopez",
      role: "COO, Enterprise Global",
      quote:
        "We evaluated several dashboard solutions before choosing DashPro, and it was the best decision we made. The customizable reports, team collaboration features, and enterprise-grade security have made it an essential tool for our entire organization.",
      image: "/man.png",
    },
  ];

  return (
    <section
      id="testimonials"
      className="py-16 bg-gradient-to-b from-white to-blue-50"
    >
      <div className="container mx-auto space-y-8 px-4">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
          <div className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
            <span>Customer Stories</span>
          </div>
          <h2 className="text-3xl font-bold leading-[1.1] sm:text-4xl md:text-5xl">
            Trusted by Thousands
          </h2>
          <p className="max-w-[85%] leading-normal text-gray-500 sm:text-lg sm:leading-7">
            Don&apos;t just take our word for it. Here&apos;s what our customers
            have to say.
          </p>
        </div>
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex flex-col justify-between rounded-xl border border-blue-100 bg-white p-8 shadow-lg"
            >
              <div className="mb-4">
                <div className="flex text-yellow-400 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ))}
                </div>
                <p className="text-lg leading-relaxed text-gray-600">
                  {testimonial.quote}
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="h-12 w-12 rounded-full bg-blue-100 overflow-hidden">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={50}
                    height={50}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-medium leading-none">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
