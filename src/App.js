import { useState } from "react";
import "./styles.css";

export default function App() {
  const [reverse, setReverse] = useState({
    input1: "",
    input2: ""
  });

  const handleReverse = () => {
    let newInput1 = reverse.input2;
    let newInput2 = reverse.input1;
    setReverse({ input1: newInput1, input2: newInput2 });
  };

  return (
    <div className="App">
      <input
        placeholder="input1"
        name="input1"
        value={reverse.input1}
        onChange={(e) => setReverse({ ...reverse, input1: e.target.value })}
      />
      <input
        placeholder="input2"
        name="input2"
        value={reverse.input2}
        onChange={(e) => setReverse({ ...reverse, input2: e.target.value })}
      />
      <input
        id="submit"
        type="submit"
        value="reverse"
        onClick={handleReverse}
      />
    </div>
  );
}
