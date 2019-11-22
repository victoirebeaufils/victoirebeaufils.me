import React from 'react';
import { render } from 'react-dom';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import drilldown from 'highcharts-drilldown';
drilldown(Highcharts);



  const Chart = (props) => (
    <div>
      <HighchartsReact  highcharts={Highcharts} constructorType="chart" options={props.options} />
    </div>
  );
  export default Chart;