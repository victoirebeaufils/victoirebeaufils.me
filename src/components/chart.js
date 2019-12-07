import React from 'react';
import { render } from 'react-dom';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import drilldown from 'highcharts-drilldown';
import highchartsAccessibility from "highcharts/modules/accessibility";
if (typeof window !== `undefined`) {
  highchartsAccessibility(Highcharts);
}
drilldown(Highcharts);



  const Chart = (props) => (
    <div>
      <HighchartsReact  highcharts={Highcharts} constructorType="chart" options={props.options} />
    </div>
  );
  export default Chart;