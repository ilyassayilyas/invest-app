import { Chart as ChartJS, registerables } from "chart.js";
import { Line } from "react-chartjs-2";
import { coinHistoryInterface } from "../../types";
ChartJS.register(...registerables);

interface CoinProps {
  currentCoinPrice: number;
  coinHistory: coinHistoryInterface;
  coinName: string;
  timePeriod: string;
}

export default function LineChart(props: CoinProps) {
  const coinPrice = [];
  const coinTimestamp = [];
  for (let i = 0; i < props.coinHistory?.data?.history.length; i++) {
    coinPrice.push(props.coinHistory?.data?.history[i].price);
  }

  if (props.timePeriod === "24h") {
    for (let i = 0; i < props.coinHistory?.data?.history.length; i++) {
      coinTimestamp.push(
        new Date(
          props.coinHistory?.data?.history[i].timestamp * 1000
        ).toLocaleTimeString()
      );
    }
  } else {
    for (let i = 0; i < props.coinHistory?.data?.history.length; i++) {
      coinTimestamp.push(
        new Date(
          props.coinHistory?.data?.history[i].timestamp * 1000
        ).toLocaleDateString()
      );
    }
  }

  const data = {
    labels: coinTimestamp.reverse(),
    datasets: [
      {
        label: "Price, USD",
        data: coinPrice.reverse(),
        fill: false,
        backgroundColor: "#000080",
        borderColor: "#000080",
        pointRadius: 0,
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
      <Line data={data} />
    </div>
  );
}
