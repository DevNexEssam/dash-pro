export default function StatsSection() {
    return (
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <p className="text-3xl font-bold text-blue-600">10k+</p>
              <p className="text-gray-600 mt-1">Active Users</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-blue-600">500+</p>
              <p className="text-gray-600 mt-1">Companies</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-blue-600">99.9%</p>
              <p className="text-gray-600 mt-1">Uptime</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-blue-600">24/7</p>
              <p className="text-gray-600 mt-1">Support</p>
            </div>
          </div>
        </div>
      </section>
    );
  }