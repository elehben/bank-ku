import { LineChart, lineClasses } from '@mui/x-charts/LineChart';
import { axisClasses } from '@mui/x-charts/ChartsAxis';

const xLabels = ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan'];
const data = [150, 250, 480, 780, 220, 550, 650];

function BalanceHistoryChart() {
  return (
    <div className="w-full">
        <h2 className="text-xl text-[#343C6A] font-semibold mb-4">Balance History</h2>
        <div className="bg-white rounded-3xl pt-6 h-[300px] w-full">
            <LineChart
                xAxis={[{ 
                    scaleType: 'point', 
                    data: xLabels,
                    disableLine: true,
                    // disableTicks: true
                }]}
                yAxis={[{
                    disableLine: true,
                    // disableTicks: true
                }]}
                series={[
                    {
                        data,
                        area: true,
                        color: '#1814F3',
                        showMark: false,
                        curve: 'monotoneX',
                    },
                ]}
                margin={{ top: 20, right: 20, bottom: 30, left: 40 }}
                sx={{
                    '& .MuiAreaElement-root': {
                        fill: 'url(#gradient)',
                    },
                    '& .MuiChartsAxis-bottom .MuiChartsAxis-tickLabel': {
                        fill: '#718EBF',
                    },
                    '& .MuiChartsAxis-left .MuiChartsAxis-tickLabel': {
                        fill: '#718EBF',
                    },
                    '& .MuiChartsGrid-line': {
                        strokeDasharray: '4 4',
                        stroke: '#DFEAF2',
                    },
                    [`& .${lineClasses.line}`]: {
                        strokeWidth: 3,
                    },
                    [`& .${lineClasses.area}`]: {
                        fill: "url('#gradient')",
                        filter: 'none', // Remove the default filtering
                    },
                    [`& .${axisClasses.tick}`]:
                    {
                        stroke: '#DFEAF2',
                    },
                }}
                grid={{ horizontal: true, vertical: true }}
            >
                <defs>
                    <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#1A16F3" stopOpacity={0.3} />
                        <stop offset="100%" stopColor="#1A16F3" stopOpacity={0} />
                    </linearGradient>
                </defs>
            </LineChart>
        </div>
    </div>
  );
}

export default BalanceHistoryChart;