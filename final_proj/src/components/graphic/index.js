import React, { useEffect, useRef, useState } from 'react';
import Chart from 'chart.js';

const chartConfig = {
  type: 'bar',
  data: {
    // ...
  },
  options: {
    // ...
  }
};

export const Chartjs =  () => {
  const chartContainer = useRef(null);
  const [chartInstance, setChartInstance] = useState(null);

  useEffect(() => {
    if (chartContainer && chartContainer.current) {
      const newChartInstance = new Chartjs(chartContainer.current, chartConfig);
      setChartInstance(newChartInstance);
    }
  }, [chartContainer]);

  return (
    <div>
      <canvas ref={chartContainer} />
    </div>
  );
};

