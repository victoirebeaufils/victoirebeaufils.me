import React, { Component } from 'react'
import * as d3 from 'd3'
class PieChart extends Component {
    componentDidMount() {
       
        const data = [5,3,7,6];
        const titles = this.props.data;
        this.drawPieChart(data, titles)
       
    }

        drawPieChart(data, titles) {
            var svg = d3.select("svg"),
            width = svg.attr("width"),
            height = svg.attr("height"),
            radius = Math.min(width, height) / 2,
            g = svg.append("g").attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
    
        var color = d3.scaleOrdinal(['#4daf4a','#377eb8','#ff7f00','#984ea3','#e41a1c']);
    
        // Generate the pie
        var pie = d3.pie();
    
        // Generate the arcs
        var arc = d3.arc()
                    .innerRadius(0)
                    .outerRadius(radius);
        //Outer arc for labels
        var outerArc = d3.arc()
  .innerRadius(radius * 0.9)
  .outerRadius(radius * 0.9)
        //Generate groups
        var arcs = g.selectAll("arc")
                    .data(pie(data))
                    .enter()
                    .append("g")
                    .attr("class", "arc")
    
        //Draw arc paths
        arcs.append("path")
            .attr("fill", function(d, i) {
                return color(i);
            })
            .attr("d", arc);
    


            svg.selectAll('arcs')
            .data(data)
            .enter()
            .append('text')
            .text(function(d){ return d});
            


                      }
    

     


   
        
        

    render() { 
        
        return (
        <div ref="canvas2">
       <svg width="300" height="200"> </svg>
       </div>
        ) }
}
export default PieChart