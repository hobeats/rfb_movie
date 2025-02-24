import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [result, setResult] = useState(0);
  const [selCoin, setSelCoin] = useState(0);
  const selected = (e) => {
    setSelCoin(e.target.value);
  };
  const inputMoney = (e) => {
    setResult(e.target.value);
  };
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <h1>THE COINS!</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <div>
          <select onChange={selected}>
            <option key="-1">코인을 선택하세요</option>
            {coins.map((coin, index) => (
              <option key={index} value={coin.quotes.USD.price}>
                {coin.name}({coin.symbol}): ${coin.quotes.USD.price.toFixed(2)}
              </option>
            ))}
          </select>
          <div>
          <input onChange={inputMoney} type="number" placeholder="USD" /> {'> '}
          <input value={result/selCoin > 0 ? result/selCoin : 0} disabled /> 
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
