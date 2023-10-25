import CounterList from "../components/CounterList";
import Link from "../components/Link";

export default function CountersPage({ animals, handleAdd, handleSubtract }) {
  return (
    <>
      <Link href="/">← Back</Link>
      <CounterList
        animals={animals}
        handleAdd={handleAdd}
        handleSubtract={handleSubtract}
      />
    </>
  );
}
