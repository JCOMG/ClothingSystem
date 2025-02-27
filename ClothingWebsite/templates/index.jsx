import React from "react";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4">
      <header className="w-full bg-blue-600 text-white text-center p-4 text-2xl font-bold shadow-lg">
        Clothing Shop
      </header>

      <main className="w-full max-w-4xl mt-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center"
            >
              <div className="w-32 h-32 bg-gray-300 flex items-center justify-center rounded-md">
                <span className="text-gray-500">Image</span>
              </div>
              <h3 className="mt-2 text-gray-700 font-medium">Product {item}</h3>
              <p className="text-gray-500">$20.00</p>
              <button className="mt-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-500">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default HomePage;
