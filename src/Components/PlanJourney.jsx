// PlanJourney.jsx
export default function PlanJourney() {
  const options = [
    {
      title: "Summer Escapes",
      description: "Cool down with tropical beaches and island hopping.",
      icon: "🌴",
    },
    {
      title: "Winter Adventures",
      description: "Explore snowy mountains or cozy city lights.",
      icon: "❄️",
    },
    {
      title: "7-Day Itineraries",
      description: "Perfect week-long travel plans tailored for you.",
      icon: "🗓️",
    },
  ];

  return (
    <section className="bg-amber-500 py-16 px-6 rounded-2xl">
      <div className=" mx-auto px-6 md:px-0">
        <h2 className="text-4xl font-bold text-center mb-12 eb-garamond">Plan Your Journey</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {options.map((item, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-md p-6 text-center">
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
