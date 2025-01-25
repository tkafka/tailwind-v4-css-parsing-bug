import React, { useState } from "react";

function App(): JSX.Element {
  const [count, setCount] = useState<number>(0);

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
          Vite + React
        </h1>
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden p-6">
          <button
            onClick={() => setCount((count) => count + 1)}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200"
          >
            Count is {count}
          </button>
          <p className="mt-4 text-gray-600">
            Edit <code className="bg-gray-100 rounded px-1">src/App.tsx</code>{" "}
            and save to test HMR
          </p>
        </div>
        <p className="text-gray-500 text-center mt-8">
          Click on the Vite and React logos to learn more
        </p>
      </main>
    </div>
  );
}

export default App;
