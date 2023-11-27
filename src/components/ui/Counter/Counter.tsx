'use client';

import React, { useState } from 'react';

import { Button } from '../button';

export const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };
  return (
    <div className="flex h-[80vh] items-center justify-center">
      <div className="bg-indigo-100 ">
        <div className="bg-white border-gray-200 max-w-sm justify-center rounded-lg border p-6 shadow">
          <h1 className="text-gray-700 mb-3 flex items-center justify-center text-3xl font-semibold">
            Overkill Counter App
          </h1>
          <h1 className="text-gray-700 my-10 flex items-center justify-center text-4xl font-semibold">
            {count}
          </h1>
          <div className="grid grid-cols-2 gap-4">
            <Button variant="primary" onClick={decrement}>
              Decrease
            </Button>
            <Button variant="primary" onClick={increment}>
              Increase
            </Button>
          </div>
          <div className="flex items-center justify-center">
            <Button variant="secondary" className="mt-5" onClick={reset}>Reset</Button>
          </div>
        </div>
      </div>
    </div>
  );
};
