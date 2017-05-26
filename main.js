var myGroup = d3.select('#chart')
  .append('g')
    .attr('class', 'myGroup');

myGroup
  .append('circle')
    .attr('cx', 200)
    .attr('cy', 250)
    .attr('r',50)
    .attr('transform', 'translate(400)')
    .on('click', function() {
      myGroup.select('rect').attr('fill', 'yellow');
    })

myGroup
  .append('rect')
    .attr('x', 30)
    .attr('y', 40)
    .attr('transform', 'translate(400)')
    .attr('width', 200)
    .attr('height', 200)

var scale = d3.scaleLinear()
  .domain([-100, 100])
  .range([0, 400]);

var axis = d3.axisBottom(scale)
  .ticks(10)

var scaleY = d3.scaleLinear()
  .domain([100, 0])
  .range([0, 300]);

var axisY = d3.axisLeft(scaleY)
  .ticks(10)

d3.select('#chart')
  .append('g')
  .attr('transform', 'translate(50, 400)')
  .call(axis)

d3.select('#chart')
  .append('g')
  .attr('transform', 'translate(50, 100)')
  .call(axisY)

myGroup
  .append('rect')
  .attr('x', 0)
  .attr('y', 40)
  .attr('width', 40)
  .attr('height', 100)
  .attr('transform', 'translate(50, 260)');
