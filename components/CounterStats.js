export default function CounterStats() {
  const countSum = "???";
  const dragonCount = "???";

  return (
    <div>
      <h2>Counter Stats</h2>
      <p>Our counters currently counting:</p>
      <ul>
        <li>Amount of Animals: {countSum}</li>
        <li>Amount of Dragons: {dragonCount}</li>
      </ul>
    </div>
  );
}
