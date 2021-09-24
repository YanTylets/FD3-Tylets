import React from 'react';
import PropTypes from 'prop-types';

import Chart from "chart.js";

var DoughnutChart = require("react-chartjs").Doughnut;

class MyChart extends React.PureComponent {

    static propTypes = {
        vote: PropTypes.number.isRequired,
    }

  render() {
      let color = this.props.vote>=7.5 ? 'green': (this.props.vote>=6 ? 'orange' : 'red')

      var chartData =[
        {
            value: (this.props.vote)*10,
            color:color,
        },
        {
            value: 100-(this.props.vote)*10,
            color:"black",
        },
      ]

      var chartOptions = {
        showTooltips: false,
        //Boolean - Whether we should show a stroke on each segment
        segmentShowStroke : false,
    
        //String - The colour of each segment stroke
        segmentStrokeColor : "#fff",
    
        //Number - The width of each segment stroke
        segmentStrokeWidth : 2,
    
        //Number - The percentage of the chart that we cut out of the middle
        percentageInnerCutout : 70, // This is 0 for Pie charts
    
        //Number - Amount of animation steps
        animationSteps : 100,
    
        //String - Animation easing effect
        animationEasing : "easeOutBounce",
    
        //Boolean - Whether we animate the rotation of the Doughnut
        animateRotate : true,
    
        //Boolean - Whether we animate scaling the Doughnut from the centre
        animateScale : false,
        // {% raw %}
        //String - A legend template
        legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<segments.length; i++){%><li><span style=\"background-color:<%=segments[i].fillColor%>\"><%if(segments[i].label){%><%=segments[i].label%><%}%></span></li><%}%></ul>"
        // {% endraw %}
    }

      return(
        <DoughnutChart data={chartData} options={chartOptions} width='70px' height='70px'/>
      );
  }
}

export default MyChart;