"use client";

export default function RTLPage() {
  return (
    <div className="p-6" dir="rtl">
      <h1 className="text-2xl font-bold mb-6">RTL صفحة</h1>
      <div className="grid gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">
            مرحبا بكم في لوحة التحكم
          </h2>
          <p className="text-gray-600">
            هذه الصفحة مخصصة للغات التي تُكتب من اليمين إلى اليسار.
          </p>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">إحصائيات</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 border rounded-lg">
              <p className="text-sm text-gray-500">المستخدمين</p>
              <p className="text-2xl font-bold">1,234</p>
            </div>
            <div className="p-4 border rounded-lg">
              <p className="text-sm text-gray-500">الزيارات</p>
              <p className="text-2xl font-bold">5,678</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
