import { PieChart, pieClasses } from '@mui/x-charts/PieChart';
import { useAnimatePieArcLabel } from '@mui/x-charts/hooks';
import { useState, useEffect } from 'react';

const data = [
  { id: 0, value: 30, label: 'Entertainment', color: '#343C6A' },
  { id: 1, value: 15, label: 'Bill Expense', color: '#FC7900' },
  { id: 2, value: 35, label: 'Others', color: '#1A16F3' },
  { id: 3, value: 20, label: 'Investment', color: '#FA00FF' },
];

function CustomPieArcLabel(props) {
  const { 
    formattedArcLabel, hidden, startAngle, endAngle, arcLabelRadius, cornerRadius, 
    paddingAngle, skipAnimation, seriesId, color, isFaded, isHighlighted, classes, 
    ...other 
  } = props;
  
  const { x, y, ref } = useAnimatePieArcLabel(props);
  
  // Deteksi jika ukuran pie mengecil dari props radius yang di-pass MUI
  // Atur base font size agar tidak overflow
  const isSmall = arcLabelRadius < 60; 

  if (hidden || !formattedArcLabel) {
    return null;
  }
  
  const lines = formattedArcLabel.split('\n');
  return (
    <text {...other} x={x} y={y} ref={ref} textAnchor="middle" fill="white">
        <tspan x={x} dy="-0.2em" fontSize={isSmall ? "11" : "14"} fontWeight="bold">
            {lines[0]}
        </tspan>
        <tspan x={x} dy="1.2em" fontSize={isSmall ? "8" : "11"} fontWeight="medium">
            {lines[1]}
        </tspan>
    </text>
  );
}

function ExpenseStatisticsChart() {
  const [radius, setRadius] = useState(120);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      // Responsive radii calculations
      if (width >= 1280) {
        setRadius(120); // xl desktop
      } else if (width >= 1024) {
        setRadius(85);  // lg laptop (ruang terbatas karena split 1/3)
      } else if (width >= 768) {
        setRadius(115); // md tablet
      } else {
        setRadius(100); // mobile
      }
    };
    
    window.addEventListener('resize', handleResize);
    handleResize(); // trigger ganti awal
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="w-full">
        <h2 className="text-xl text-[#343C6A] font-semibold mb-4">Expense Statistics</h2>
        <div className="bg-white rounded-3xl p-4 md:p-6 h-[275px] md:h-[300px] w-full flex items-center justify-center">
            <PieChart
                series={[
                    {
                        data,
                        arcLabel: (item) => `${item.value}%\n${item.label}`,
                        arcLabelMinAngle: 20,
                        innerRadius: 5,
                        outerRadius: radius,
                        paddingAngle: 5,
                        cornerRadius: 0,
                        cx: '50%',
                        cy: '50%',
                    },
                ]}
                slots={{ pieArcLabel: CustomPieArcLabel }}
                sx={{
                    [`& .${pieClasses.arcLabel}`]: {
                        fill: 'white',
                    },
                }}
                margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
                hideLegend
            />
        </div>
    </div>
  );
}

export default ExpenseStatisticsChart;