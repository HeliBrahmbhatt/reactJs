import { useCallback, useEffect, useState, useRef } from "react";

function PasswordGenreter() {
  const [length, setLength] = useState(8);
  const [number, setNumber] = useState(false);
  const [char, setChar] = useState(false);
  const [pass, setPass] = useState("");

  const passRef = useRef(null);

  const passGen = useCallback(() => {
    let password = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghigklmnopqrstuvwxyz";
    if (number) str += "0123456789";
    if (char) str += "!@#$%^&*()~_+";
    for (let i = 1; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      password += str.charAt(char);
    }
    setPass(password);
  }, [length, number, char, setPass]);

  useEffect(() => {
    passGen();
  }, [length, number, char, passGen]);

  const onClickCopy = useCallback(() => {
    passRef.current?.select();
    passRef.current?.setSelectionRange(0, 3);
    window.navigator.clipboard.writeText(pass);
  }, [pass]);

  return (
    <div>
      <h1 className="text-4xl text-center text-white p-52">
        Password Generator
      </h1>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg p-4 my-8 text-orange-500 bg-gray-800">
        <div className="flex m-5 shadow-xl rounded-xl overflow-hidden mb-4">
          <input
            type="text"
            value={pass}
            className="outline-none w-full py-1 px-3"
            readOnly
            placeholder="Password"
            ref={passRef}
          />
          <button
            className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
            onClick={onClickCopy()}
          >
            Copy
          </button>
        </div>

        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => setLength(e.target.value)}
            />
            <label>Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultValue={number}
              id="numberInput"
              onChange={() => {
                setNumber((prev) => !prev);
              }}
            />
            <label>Number</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultValue={number}
              id="charInput"
              onChange={() => {
                setChar((prev) => !prev);
              }}
            />
            <label>Char</label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PasswordGenreter;
