import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");
  const colorArr = [
    "Red",
    "Green",
    "Yellow",
    "Black",
    "White",
    "Orange",
    "Blue",
    "Maroon",
  ];

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-3 rounded-xl">
          {colorArr.map((item) => {
            return (
              <button
                className="outline-none px-4 rounded-xl"
                style={{
                  backgroundColor: item,
                  color: item === "White" ? "black" : "whitesmoke",
                }}
                onClick={() => {
                  setColor(item);
                }}
              >
                {item}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
