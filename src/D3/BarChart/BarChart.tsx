import * as React from 'react';
import * as d3 from 'd3';
import './BarChart.css';

interface IProps {
    teamData : {};
    scrollState: boolean;
}


class BarChart extends React.Component<IProps> {
  constructor(props: IProps) {
    super(props);
  }

  state = {
    activeStat: 'Points Per Game'
  }


  statOptionHandler(e: React.MouseEvent<HTMLButtonElement>) {
    let target = e.target;
    if (target instanceof HTMLButtonElement) {
      this.setState({
        activeStat: target.textContent
      }, () => {
        // pass activeState to function
        // This function is a closure and has a switch case
        // switch case will determine what manips based on state
        // pass maniped data to function that builds entire chart
        // make sure this chart function is all dynamic.
      });
    }
  }
      
      
  render() {

    const teamsArray: any[] = [];
    for (let team in this.props.teamData) {
        teamsArray.push(this.props.teamData[team]);
    }

    const pointsPerGame = teamsArray.map( team => team.teamData.teamSeasonRanks[0].ptsPg);

    const teams = teamsArray.map((t) => {
      return t.teamData.teamInfoCommon[0].teamCity + ' ' + t.teamData.teamInfoCommon[0].teamName; 
    });

    const pointsPerGameAndTeam = pointsPerGame.map( (points, i) => {
      const teamName = teams[i];
      return { points, teamName}
    });

    const margin = {top: 5, right: 5, bottom: 50, left: 50};
      // here, we want the full chart to be 700x200, so we determine
      // the width and height by subtracting the margins from those values
      const fullWidth = 500;
      const fullHeight = 300;
      // the width and height values will be used in the ranges of our scales
      const width = fullWidth - margin.right - margin.left;
      const height = fullHeight - margin.top - margin.bottom;
      const svg = d3.select('svg')
        .attr('width', fullWidth)
        .attr('height', fullHeight)
        // this g is where the bar chart will be drawn
        .append('g')
          // translate it to leave room for the left and top margins
        .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');
      
      const teamScale = d3.scaleBand()
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

      // Text is not removed when a different field is clicked upon
      var yText = yAxisEle.append('text')
        .attr('transform', 'rotate(-90)translate(-' + height/2 + ',0)')
        .style('text-anchor', 'middle')
        .style('fill', 'black')
        .attr('dy', '-2.5em')
        .style('font-size', 14)
        .text(this.state.activeStat);
      
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
        <div className={this.props.scrollState ? 'fixed' : ''}>
          <svg/>
          <div className='buttonContainer'>
            <button onClick={(e) => this.statOptionHandler(e)}>
              Points Per Game
            </button>
            <button onClick={(e) => this.statOptionHandler(e)}>
              Assists Per Game
            </button>
            <button onClick={(e) => this.statOptionHandler(e)}>
              Rebounds Per Game
            </button>
            <button onClick={(e) => this.statOptionHandler(e)}>
              Points Allowed
            </button>
        </div>
        </div>
      </div>
    );
  }      


}




export default BarChart