import { BarChart } from '@mui/x-charts/BarChart';
import { chartsGridClasses } from '@mui/x-charts/ChartsGrid';
import { Radius } from 'lucide-react';

const dataset = [
  { day: 'Sat', deposit: 480, withdraw: 240 },
  { day: 'Sun', deposit: 340, withdraw: 130 },
  { day: 'Mon', deposit: 320, withdraw: 270 },
  { day: 'Tue', deposit: 480, withdraw: 370 },
  { day: 'Wed', deposit: 150, withdraw: 240 },
  { day: 'Thu', deposit: 390, withdraw: 240 },
  { day: 'Fri', deposit: 390, withdraw: 340 },
];

function WeeklyActivityChart() {
  return (
    <div className="w-full">
        <h2 className="text-xl text-[#343C6A] font-semibold mb-4">Weekly Activity</h2>
        <div className="bg-white rounded-3xl p-3 h-[300px] w-full">
            <BarChart
                dataset={dataset}
                xAxis={[{ 
                    scaleType: 'band', 
                    dataKey: 'day', 
                    categoryGapRatio: 0.5,
                    disableLine: true,
                    disableTicks: true,
                }]}
                yAxis=
                {[{
                    disableTicks: true,
                    disableLine: true,
                }]}
                series={[
                    { 
                        dataKey: 'deposit', 
                        label: 'Deposit', 
                        color: '#1A16F3',
                        stack: 'stack',
                        labelMarkType: 'circle',
                    },
                    { 
                        dataKey: 'withdraw', 
                        label: 'Withdraw', 
                        color: '#16DBCC',
                        labelMarkType: 'circle',
                    }
                ]}
                slotProps={{
                    legend: {
                        direction: 'row',
                        position: { vertical: 'top', horizontal: 'end' },
                        itemMarkWidth: 15,
                        itemMarkHeight: 15,
                        markGap: 5,
                        itemGap: 30,
                        labelStyle: {
                            fontSize: 14,
                            fill: '#718EBF',
                        },
                    },
                    bar: {
                        rx: 15,
                    }
                }}
                margin={{ top: 5, right: 10, bottom: 10, left: 10 }}
                grid={{ horizontal: true }}
                sx={{
                    '& .MuiChartsAxis-bottom .MuiChartsAxis-tickLabel': {
                        fill: '#718EBF',
                    },
                    '& .MuiChartsAxis-left .MuiChartsAxis-tickLabel': {
                        fill: '#718EBF',
                    },
                    // Style grid lines horizontal
                    [`& .${chartsGridClasses.line}`]: {
                        stroke: '#f0f0f0',
                        strokeWidth: 1,
                    },
                }}
                borderRadius={10}
                disableLineItemHighlight
            />
        </div>
    </div>
  );
}

export default WeeklyActivityChart;