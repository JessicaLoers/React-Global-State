import { useState } from "react";
import GlobalStyle from "../styles";
import Layout from "../components/Layout";

const initialAnimals = [
  { id: "1", name: "Cat", count: 0 },
  { id: "2", name: "Dogs", count: 0 },
  { id: "3", name: "Sheep", count: 0 },
  { id: "4", name: "Dragons", count: 0 },
];

export default function App({ Component, pageProps }) {
  const [animals, setAnimals] = useState(initialAnimals);

  function handleAdd(id) {
    setAnimals(
      animals.map((animal) =>
        animal.id === id ? { ...animal, count: animal.count + 1 } : animal
      )
    );
  }

  function handleSubtract(id) {
    setAnimals(
      animals.map((animal) =>
        animal.id === id
          ? { ...animal, count: Math.max(0, animal.count - 1) }
          : animal
      )
    );
  }

  // Derived from state variable animals. YEAH.
  const animalsCount = animals.map((animal) => animal.count);
  const animalSum = animalsCount.reduce((a, b) => a + b);
  const dragonCount = animals.find((animal) => animal.name === "Dragons").count;

  return (
    <>
      <GlobalStyle />
      <Layout animalSum={animalSum} dragonCount={dragonCount}>
        {/* Drill props to every page component */}
        <Component
          {...pageProps}
          animals={animals}
          handleAdd={handleAdd}
          handleSubtract={handleSubtract}
          animalSum={animalSum}
          dragonCount={dragonCount}
        />
      </Layout>
    </>
  );
}
