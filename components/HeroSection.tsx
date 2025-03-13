import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-blue-50 py-20 md:py-32">
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]"></div>
      <div className="absolute top-0 right-0 -mt-16 opacity-20">
        <svg
          width="800"
          height="800"
          viewBox="0 0 800 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="400" cy="400" r="400" fill="url(#paint0_radial)" />
          <defs>
            <radialGradient
              id="paint0_radial"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(400 400) rotate(90) scale(400)"
            >
              <stop stopColor="#3B82F6" />
              <stop offset="1" stopColor="#3B82F6" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute bottom-0 left-0 -mb-16 opacity-20">
        <svg
          width="600"
          height="600"
          viewBox="0 0 600 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="300" cy="300" r="300" fill="url(#paint1_radial)" />
          <defs>
            <radialGradient
              id="paint1_radial"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(300 300) rotate(90) scale(300)"
            >
              <stop stopColor="#3B82F6" />
              <stop offset="1" stopColor="#3B82F6" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>
      </div>
      <div className="container relative mx-auto flex max-w-[64rem] flex-col items-center gap-4 text-center px-4">
        <div className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10 mb-4">
          <span>New Dashboard Features Released</span>
        </div>
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">
          Professional Analytics Dashboard for Your Business
        </h1>
        <p className="max-w-[42rem] leading-normal text-gray-600 sm:text-xl sm:leading-8">
          Gain valuable insights with our intuitive dashboard. Monitor
          performance, track metrics, and make data-driven decisions with
          beautiful visualizations.
        </p>
        <div className="mt-6 flex flex-col gap-4 sm:flex-row">
          <Link href="/dashboard">
            <span className="inline-flex h-12 items-center justify-center rounded-md bg-blue-600 px-6 py-3 text-base font-medium text-white transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 shadow-lg shadow-blue-500/20 cursor-pointer">
              Get Started <FaArrowRight className="ml-2 h-4 w-4" />
            </span>
          </Link>
          <Link href="#features">
            <span className="inline-flex h-12 items-center justify-center rounded-md border border-gray-300 bg-white/80 backdrop-blur px-6 py-3 text-base font-medium text-gray-900 transition-colors hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 cursor-pointer">
              Learn More
            </span>
          </Link>
        </div>
        <div className="mt-12 w-full max-w-4xl rounded-2xl border border-blue-100 bg-white/60 backdrop-blur-sm p-4 shadow-xl relative h-[400px]">
          <Image
            src="/dashboard.png"
            alt="Dashboard Preview"
            className="rounded-lg shadow-md object-cover"
            fill
          />
        </div>
      </div>
    </section>
  );
}