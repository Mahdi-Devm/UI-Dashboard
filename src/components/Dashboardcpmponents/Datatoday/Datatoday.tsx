"use client";

import {
  MdAttachMoney,
  MdPerson,
  MdShoppingCart,
  MdAccountBalance,
} from "react-icons/md";

function Datatoday() {
  const cards = [
    {
      title: "Today's Money",
      value: "$53,000",
      change: "+55%",
      icon: <MdAttachMoney size={24} className="text-white" />,
      bgColor: "bg-blue-500",
    },
    {
      title: "Today's Users",
      value: "2,300",
      change: "+5%",
      icon: <MdPerson size={24} className="text-white" />,
      bgColor: "bg-blue-500",
    },
    {
      title: "New Clients",
      value: "+3,052",
      change: "+14%",
      icon: <MdShoppingCart size={24} className="text-white" />,
      bgColor: "bg-blue-500",
    },
    {
      title: "Total Sales",
      value: "$173,000",
      change: "+8%",
      icon: <MdAccountBalance size={24} className="text-white" />,
      bgColor: "bg-blue-500",
    },
  ];

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {cards.map((card, index) => (
        <div key={index} className="rounded-2xl p-2 text-white bgshadow ">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm text-gray-400">{card.title}</p>
              <div className="flex items-center space-x-2 mt-2">
                <h3 className="text-xl font-bold">{card.value}</h3>
                <span className="text-sm text-green-400">{card.change}</span>
              </div>
            </div>
            <div className={`${card.bgColor} p-3 rounded-lg shadow-lg`}>
              {card.icon}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Datatoday;
