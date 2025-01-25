import React, { useState } from "react";
import Markdown from "react-markdown";
import { tokens } from "./tokens.ts";

const markdownExample = `
# This should be a title

And this paragraph

- a list
- of items
            `;

function App(): JSX.Element {
  const [count, setCount] = useState<number>(0);

  return (
    <div className="min-h-screen bg-secondary-50">
      <main className={tokens.container}>
        <h1 className={tokens.h1}>Vite + React</h1>
        <div className={tokens.card}>
          <button
            onClick={() => setCount((count) => count + 1)}
            className={tokens.buttonPrimary}
          >
            Count is {count}
          </button>
          <p className="my-4 text-gray-600">
            Edit{" "}
            <code className="bg-primary-100 rounded px-1">src/App.tsx</code> and
            save to test HMR
          </p>

          <div className="space-y-8">
            <h2 className={tokens.h2}>Markdown test</h2>
            <Markdown>{markdownExample}</Markdown>
          </div>
        </div>

        <p className="text-gray-500 text-center mt-8">
          Click on the Vite and React logos to learn more
        </p>
      </main>
    </div>
  );
}

export default App;
