import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  scales,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend)

function Grafic(){
const chartData = {
      labels: ["1:00","2:00","3:00","4:00","5:00","6:00","7:00","8:00"],
      datasets: [
        {
          data: [15,17,19,20,20,21,19,17],
          borderColor: "orange",
          tension: 0.4,
          pointRadius: 0,
        }]};
        const options = {
          scales: {
            y: {
            min: 5,
            max: 25,
            ticks: {
              stepSize:5,
              callback: (value) => value + "℃"
            }
            }

          }
        }
    return(
        <Line data={chartData} options={options}/>
    );
}
        
export default Grafic