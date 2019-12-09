import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
//import drilldown from 'highcharts-drilldown';
import drilldown from 'highcharts/modules/drilldown'
import HighchartsExporting from 'highcharts/modules/exporting';


//drilldown(Highcharts);

if (typeof Highcharts === 'object') {
  HighchartsExporting(Highcharts)
}

//drilldown(Highcharts);



  const Chart = (props) => (
    <div>
      <HighchartsReact  highcharts={Highcharts} constructorType="chart" options={props.options} />
    </div>
  );
  export default Chart;