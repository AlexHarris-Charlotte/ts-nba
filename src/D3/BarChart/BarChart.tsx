import * as React from 'react';
import * as d3 from 'd3';
import './BarChart.css';

interface IProps {
    teamData : {};
    scrollState: boolean;
}


const BarChart = (props: IProps) => {

  const teamsArray: any[] = [];
  for (let team in props.teamData) {
      teamsArray.push(props.teamData[team]);
  }

  const pointsPerGame = teamsArray.map( team => team.teamData.teamSeasonRanks[0].ptsPg);

  const teams = teamsArray.map((t) => {
    return t.teamData.teamInfoCommon[0].teamCity + ' ' + t.teamData.teamInfoCommon[0].teamName; 
  });

  const pointsPerGameAndTeam = pointsPerGame.map( (points, i) => {
    const teamName = teams[i];
    return { points, teamName}
   });
      
      var margin = {top: 5, right: 5, bottom: 50, left: 50};
      // here, we want the full chart to be 700x200, so we determine
      // the width and height by subtracting the margins from those values
      var fullWidth = 500;
      var fullHeight = 300;
      // the width and height values will be used in the ranges of our scales
      var width = fullWidth - margin.right - margin.left;
      var height = fullHeight - margin.top - margin.bottom;
      var svg = d3.select('svg')
        .attr('width', fullWidth)
        .attr('height', fullHeight)
        // this g is where the bar chart will be drawn
        .append('g')
          // translate it to leave room for the left and top margins
        .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');
      
      var teamScale = d3.scaleBand()
        .domain(teams)
        .range([0, width])
        .paddingInner(0.1);
      
      var bandwidth = teamScale.bandwidth();
      const maxStat = d3.max(pointsPerGame);

        let statScale = d3.scaleLinear()
        .domain([90, maxStat])
        .range([height, 0])
        .nice();
       let yAxis = d3.axisLeft(statScale);
       var xAxis = d3.axisBottom(teamScale);

       // draw the axes
      svg.append('g')
        .classed('x axis', true)
        .attr('transform', 'translate(0,' + height + ')')
        .call(xAxis);
      
      var yAxisEle = svg.append('g')
        .classed('y axis', true)
        .call(yAxis);
      
      // add a label to the yAxis
      var yText = yAxisEle.append('text')
        .attr('transform', 'rotate(-90)translate(-' + height/2 + ',0)')
        .style('text-anchor', 'middle')
        .style('fill', 'black')
        .attr('dy', '-2.5em')
        .style('font-size', 14)
        .text('Points Per Game');
      
      var barHolder = svg.append('g')
        .classed('bar-holder', true);
      
      // draw the bars
      var bars = barHolder.selectAll('rect.bar')
          .data(pointsPerGameAndTeam)
          .enter().append('rect')
          .classed('bar', true)
          .attr('x', function(team: any, i: number): any {
            return teamScale(team.teamName);
          })
          .attr('width', bandwidth)
          .attr('y', function(team: any, i: number) {
            return statScale(team.points);
          })
          .attr('height', function(team: any, i: number) {
            return height - statScale(team.points);
          });
      
      
      

    return  (
      <div className='barchartContainer'>
        <div className={props.scrollState ? 'fixed' : ''}>
          <svg/>
          <div className='buttonContainer'>
            <button>Points Per Game</button>
            <button>Assists Per Game</button>
            <button>Rebounds Per Game</button>
            <button>Points Allowed</button>
        </div>
        </div>
      </div>
    );
}




export default BarChart