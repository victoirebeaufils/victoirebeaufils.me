import React, { Component } from 'react'
import * as d3 from 'd3'
class BarChart extends Component {
    componentDidMount() {
        
    //const data = this.props.data;

  const data = this.props.data;
  const titles = this.props.titles;
        console.log("DATA my dude")
        console.log(data);
      console.log(titles)
        this.drawBarChart(data, titles)
    }
    drawBarChart(data, titles) {
      
        const canvasHeight = 450
        const canvasWidth = 400
        const scale = 0.0008;
        const svgCanvas = d3.select(this.refs.canvas)
            .append("svg")
            .attr("width", canvasWidth)
            .attr("height", canvasHeight)
            .style("border", "1px solid grey")
            .append("g");
      

            //ERROR FROM THERE
            svgCanvas.selectAll("rect")
            .data(data).enter()
                .append("rect")
                .attr("width", 40)
                .attr("height", (datapoint) => datapoint * scale)
                .attr("fill", "orange")
                .attr("x", ( datapoint,iteration) => iteration * 45)
        .attr("y", (datapoint) => canvasHeight - datapoint * scale - 40)
     
        svgCanvas.selectAll("text")
        .data(data)
        .enter()
        // Add your code below this line
         .append("text")
         .attr("x", (d, i) => i * 45)
        .attr("y", (d, i) => canvasHeight - d*scale -43)
        .text((d)=>d)
        

        svgCanvas.selectAll("g")
        .data(titles)
        .enter()
        .append("text")
        .attr("x", (d, i) => i * 45)
        .attr("y", (d, i) => canvasHeight -40)
        .attr("font-size", "12px")
        .attr("color", "black")
        .text(function(d){ return d;})
       
       
    }
        

    render() { 
        
        return (
        <div ref="canvas">
       <svg width="300" height="200"> </svg>
      
        </div>) }
}
export default BarChart