"use client";

export default function ProfilePage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Profile</h1>
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="p-6">
            <div className="flex items-center space-x-4">
              <div className="h-24 w-24 rounded-full bg-blue-500 flex items-center justify-center text-white text-2xl font-bold">
                JD
              </div>
              <div>
                <h2 className="text-xl font-semibold">John Doe</h2>
                <p className="text-gray-500">Senior Developer</p>
              </div>
            </div>
          </div>
          <div className="border-t">
            <div className="p-6 space-y-6">
              <div>
                <h3 className="text-lg font-medium mb-2">About</h3>
                <p className="text-gray-600">
                  Experienced developer with a passion for creating beautiful
                  and functional user interfaces.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">
                  Contact Information
                </h3>
                <div className="space-y-2">
                  <p className="text-gray-600">Email: john.doe@example.com</p>
                  <p className="text-gray-600">Phone: (555) 123-4567</p>
                  <p className="text-gray-600">Location: New York, USA</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
