import { FaHeart, FaStar } from "react-icons/fa";

const CountryCard = ({country}) => {
    return (
          <div className="min-w-80 bg-white rounded-xl shadow-md overflow-hidden relative p-4 flex flex-col">
      <div className="relative">
        <img
          src={country.image}
          alt={country.country_name}
          className="h-48 w-full rounded-2xl object-cover"
        />
        <button className="absolute top-2 right-2 bg-white rounded-full p-1 shadow hover:scale-105 transition">
          <FaHeart className="text-gray-600" />
        </button>
      </div>

      <div className="p-4 ">
        <h3 className="text-md font-semibold text-gray-800">
          {country.country_name}
        </h3>

        <div className="flex items-center gap-1 text-sm text-gray-600 mt-1">
          <span>4.9</span>
          <div className="flex text-green-500">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} size={12} />
            ))}
          </div>
          <span>(56)</span>
        </div>

        
      </div>
      <p className="mt-2 text-sm text-gray-800 font-medium ">
         {country.description
}
        </p>
        
    </div>
    );
};

export default CountryCard;