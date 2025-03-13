export default function SettingsPage() {
  return (
    <div className="flex min-h-screen flex-col space-y-6">
      <div className="flex-1 space-y-4">
        <div className="mb-8 flex flex-col gap-2">
          <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
          <p className="text-gray-500">
            Manage your account settings and preferences.
          </p>
        </div>

        <div className="grid gap-10">
          <div className="space-y-6">
            <div className="rounded-lg border border-gray-200 bg-white shadow-sm">
              <div className="p-6">
                <h3 className="text-lg font-medium">Profile</h3>
                <p className="text-sm text-gray-500">
                  This is how others will see you on the site.
                </p>
              </div>
              <div className="space-y-6 p-6 pt-0">
                <div className="space-y-2">
                  <label htmlFor="username" className="text-sm font-medium">
                    Username
                  </label>
                  <input
                    id="username"
                    defaultValue="EssamMo"
                    className="flex h-10 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  />
                  <p className="text-xs text-gray-500">
                    This is your public display name.
                  </p>
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    defaultValue="Essam@example.com"
                    className="flex h-10 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  />
                  <p className="text-xs text-gray-500">
                    We'll never share your email with anyone else.
                  </p>
                </div>
                <div className="space-y-2">
                  <label htmlFor="bio" className="text-sm font-medium">
                    Bio
                  </label>
                  <textarea
                    id="bio"
                    defaultValue="I'm a software developer based in New York City."
                    className="flex min-h-[80px] w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  />
                  <p className="text-xs text-gray-500">
                    You can @mention other users and organizations.
                  </p>
                </div>
                <div>
                  <h3 className="mb-4 text-sm font-medium">Social Media</h3>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <label htmlFor="twitter" className="text-sm font-medium">
                        Twitter
                      </label>
                      <input
                        id="twitter"
                        defaultValue="https://twitter.com/EssamMo"
                        className="flex h-10 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="github" className="text-sm font-medium">
                        GitHub
                      </label>
                      <input
                        id="github"
                        defaultValue="https://github.com/EssamMo"
                        className="flex h-10 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="linkedin" className="text-sm font-medium">
                        LinkedIn
                      </label>
                      <input
                        id="linkedin"
                        defaultValue="https://linkedin.com/in/EssamMo"
                        className="flex h-10 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-center justify-between rounded-lg border border-gray-200 p-4">
                  <div className="space-y-0.5">
                    <label
                      htmlFor="notifications"
                      className="text-base font-medium"
                    >
                      Email Notifications
                    </label>
                    <p className="text-sm text-gray-500">
                      Receive emails about your account activity.
                    </p>
                  </div>
                  <div>
                    <div className="h-6 w-11 rounded-full bg-blue-600 relative">
                      <div className="absolute right-[2px] top-[2px] h-5 w-5 rounded-full border border-white bg-white"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between p-6 pt-0">
                <button className="inline-flex h-10 items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
                  Update profile
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
