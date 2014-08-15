app.populateBarGraph = function(section, data){
  var svgDivName = "#" + section + "-bar-graph";
  $(svgDivName).html('');
  var svg = dimple.newSvg(svgDivName, 590, 400);
  var myChart = new dimple.chart(svg, data);
  myChart.setBounds(60, 30, 510, 330)

  var x = myChart.addCategoryAxis("x", "quarter");
  x.title = "Quarter";
  x.addOrderRule("q");

  var y = myChart.addMeasureAxis("y", "pain_point");
  y.title = "Pain Point";
  myChart.addSeries("topic", dimple.plot.bar);
  myChart.addLegend(65, 10, 510, 20, "right");
  myChart.draw();
}

