
export default function TopDestinations() {
  const destinations = [
    {
      name: "Ha Long Bay",
      country: "Vietnam",
      image: "https://ahoyvietnam.com/wp-content/uploads/2024/02/History-Museum-of-Ho-Chi-Minh-City-Featured.webp",
      description: "Scenic bay with emerald waters and limestone islands.",
    },
    {
      name: "Langkawi",
      country: "Malaysia",
      image: "https://cdn.prod.website-files.com/576fd5a8f192527e50a4b95c/5c35fb1538a34f3530db4e4a_things%20to%20do%20in%20ho%20chi%20minh.jpg",
      description: "Tropical paradise known for beaches and cable cars.",
    },
    {
      name: "Borobudur Temple",
      country: "Indonesia",
      image: "https://www.flamingotravels.co.in/blog/wp-content/uploads/2025/02/Ho-Chi-Minh-City.jpg",
      description: "Ancient Buddhist temple and UNESCO heritage site.",
    },
  ];

  return (
    <section className="bg-white py-16">
      <div className=" mx-auto px-6">
        <h2 className="text-4xl font-bold text-center eb-garamond mb-10">Top Destinations</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {destinations.map((spot, idx) => (
            <div key={idx} className="rounded-2xl shadow-lg overflow-hidden">
              <img src={spot.image} alt={spot.name} className="w-full h-48 object-cover" />
              <div className="p-5">
                <h3 className="text-xl font-semibold">{spot.name}</h3>
                <p className="text-sm text-gray-600 mb-2">{spot.country}</p>
                <p className="text-gray-700 text-sm">{spot.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
