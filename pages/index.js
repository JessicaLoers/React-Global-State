import CounterStats from "../components/CounterStats";
import Link from "../components/Link";

export default function HomePage({ animalSum, dragonCount }) {
  return (
    <>
      <CounterStats dragonCount={dragonCount} animalSum={animalSum} />

      <Link href="/counters">To the counters →</Link>
    </>
  );
}
