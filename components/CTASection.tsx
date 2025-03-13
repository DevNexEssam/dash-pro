import Link from "next/link";

export default function CTASection() {
  return (
    <section className="bg-blue-600 py-16">
      <div className="container mx-auto py-8 px-4">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
          <h2 className="text-3xl font-bold leading-[1.1] sm:text-4xl md:text-5xl text-white">
            Ready to get started?
          </h2>
          <p className="max-w-[85%] leading-normal text-blue-100 sm:text-lg sm:leading-7">
            Sign up now and start analyzing your data in minutes. No credit card required for your 14-day trial.
          </p>
          <div className="mt-6 flex flex-col gap-4 sm:flex-row">
            <Link href="/dashboard">
              <span className="inline-flex h-12 items-center justify-center rounded-md bg-white px-6 py-3 text-base font-medium text-blue-600 transition-colors hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600 shadow-lg">
                Start Free Trial
              </span>
            </Link>
            <Link href="#features">
              <span className="inline-flex h-12 items-center justify-center rounded-md border border-blue-200 bg-transparent px-6 py-3 text-base font-medium text-white transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600">
                Learn More
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}