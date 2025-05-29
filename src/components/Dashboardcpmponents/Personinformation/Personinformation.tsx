"use client";

import ActiveUsers from "./Informationbox/ActiveUsers";
import SalesOverview from "./Informationbox/SalesOverview";

export default function Personinformation() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
      {/* First Row */}

      {/* Second Row */}
      <div className="lg:col-span-2">
        <SalesOverview />
      </div>
      <div className="lg:col-span-1">
        <ActiveUsers
          totalUsers={32984}
          clicks="2.42m"
          sales="2,400$"
          items={320}
        />
      </div>
    </div>
  );
}
