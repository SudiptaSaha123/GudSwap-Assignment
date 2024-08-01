import { useState, useEffect } from "react";
import "./App.css";
import ProgressBar from "./components/ProgressBar";
import characterData from "./data/characterData";
import Character from "./components/Character";
import Button from "./components/Button";
import { useSelector } from "react-redux";

function App() {
  const counts = useSelector((state) => state.counter);
  const [totalCount, setTotalCount] = useState(0);
  const [prevCounts, setPrevCounts] = useState({ 1: 0, 2: 0, 3: 0 });

  useEffect(() => {
    let newTotal = totalCount;

    const count1 = counts[1] || 0;
    const count2 = counts[2] || 0;
    const count3 = counts[3] || 0;

    if (Math.floor(count1 / 4) > Math.floor(prevCounts[1] / 4)) {
      newTotal += 1;
    } else if (Math.floor(count1 / 4) < Math.floor(prevCounts[1] / 4)) {
      newTotal -= 1;
    }

    if (Math.floor(count2 / 2) > Math.floor(prevCounts[2] / 2)) {
      newTotal += 1;
    } else if (Math.floor(count2 / 2) < Math.floor(prevCounts[2] / 2)) {
      newTotal -= 1;
    }

    if (count3 === 1 && (prevCounts[3] || 0) === 0) {
      newTotal += 1;
    } else if (count3 > (prevCounts[3] || 0)) {
      const incrementCount = count3 - (prevCounts[3] || 0);
      newTotal += incrementCount;
    }

    if (count3 === 1 && prevCounts[3] === 2) {
      newTotal -= 1;
    } else if (count3 === 0 && prevCounts[3] === 1) {
      newTotal -= 1;
    } else if (count3 < prevCounts[3]) {
      const decrementCount = prevCounts[3] - count3;
      newTotal -= decrementCount;
    }

    newTotal = Math.max(0, newTotal);
    newTotal = Math.min(newTotal, 15);
    setTotalCount(newTotal);
    setPrevCounts(counts);
  }, [counts, prevCounts]);

  useEffect(() => {
    if (Object.values(counts).every((count) => count === 0)) {
      setTotalCount(0);
    }
  }, [counts]);

  return (
    <div className="flex flex-col items-center -center mt-20 gap-10">
      <Button totalCount={totalCount} />
      <ProgressBar totalCount={totalCount} />
      {characterData.animals.map((character) => (
        <Character
          key={character.id}
          name={character.name}
          image={character.imageUrl}
          unitValue={character.unitValue}
          id={character.id}
          totalCount={totalCount}
        />
      ))}
      <div className="h-[0.5px] w-[55%] bg-gray-400"></div>
      <div>{`Total Units = ${totalCount}`}</div>
    </div>
  );
}

export default App;
