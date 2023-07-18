import ChartBar from './ChartBar';
import './Chart.css';

const Chart = props => {
    const  dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value)
    const totalMax = Math.max(...dataPointValues);

    return <div className="chart">
        {props.dataPoints.map((dataPoint) =>
            <ChartBar
                value={dataPoint.value}
                key={dataPoint.label}
                maxValue={totalMax}
                label={dataPoint.label} // January, February ...
            />) }
    </div>

};

export default Chart;