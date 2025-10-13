"use client";

import { useCalculator } from "@/hooks/useCalculator";
import Button from "./Button";
import Display from "./Display";

export default function Calculator() {
  const { display, history, handleInput } = useCalculator();

  const buttonLayout = [
    [
      { value: "C", type: "function" as const },
      { value: "⌫", type: "function" as const },
      { value: "÷", type: "operation" as const },
      { value: "×", type: "operation" as const },
    ],
    [
      { value: "7", type: "number" as const },
      { value: "8", type: "number" as const },
      { value: "9", type: "number" as const },
      { value: "-", type: "operation" as const },
    ],
    [
      { value: "4", type: "number" as const },
      { value: "5", type: "number" as const },
      { value: "6", type: "number" as const },
      { value: "+", type: "operation" as const },
    ],
    [
      { value: "1", type: "number" as const },
      { value: "2", type: "number" as const },
      { value: "3", type: "number" as const },
      { value: "=", type: "operation" as const, className: "row-span-2" },
    ],
    [
      { value: "0", type: "number" as const },
      { value: ".", type: "number" as const },
    ],
  ];

  return (
    <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-2xl p-6">
      <h1 className="text-xl font-bold text-center mb-3 text-gray-800">
        계산기
      </h1>

      <Display value={display} className="mb-3" />

      <div className="grid grid-cols-4 gap-3 mb-3">
        {buttonLayout.map((row, rowIndex) =>
          row.map((button, colIndex) => (
            <Button
              key={`${rowIndex}-${colIndex}`}
              value={button.value}
              type={button.type}
              onClick={handleInput}
              className={button.className}
            />
          ))
        )}
      </div>

      {history.length > 0 && (
        <div className="mt-2">
          <h3 className="text-xs font-semibold mb-1 text-gray-700">히스토리</h3>
          <div className="bg-gray-50 rounded-lg p-2 max-h-16 overflow-y-auto">
            {history.slice(0, 3).map((entry, index) => (
              <div key={index} className="text-xs text-gray-600 mb-1 font-mono">
                {entry}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
