"use client";

export default function BillingPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Billing</h1>
      <div className="grid gap-6 md:grid-cols-2">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Payment Method</h2>
          <div className="space-y-4">
            <div className="flex items-center p-4 border rounded-lg">
              <div className="flex-1">
                <p className="font-medium">Visa ending in 4242</p>
                <p className="text-sm text-gray-500">Expires 12/24</p>
              </div>
              <button className="text-blue-600 hover:text-blue-800">
                Edit
              </button>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Billing History</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 border-b">
              <div>
                <p className="font-medium">Pro Plan</p>
                <p className="text-sm text-gray-500">27 March 2024</p>
              </div>
              <span className="font-medium">$299.00</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
