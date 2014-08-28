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

  // Styling
  myChart.defaultColors = [
      new dimple.color("#5A1B34"),
      new dimple.color("#895068"),
      new dimple.color("#DC8FAE"),
      new dimple.color("#D6759E"),
      new dimple.color("#F3D6E3"),
      new dimple.color("#F596BC")
    ];

  myChart.draw();
}

app.populateStackedAreaGraph = function(section) {
  var graphType = "stacked-area";
  var svgDivName = "#" + section + "-" + graphType + "-graph";
  var dataFile = "data/" + section + "-" + graphType + ".csv";
  var svg = dimple.newSvg(svgDivName, 590, 400);
  d3.csv(dataFile, function (data) {
    var myChart = new dimple.chart(svg, data);
    myChart.setBounds(60, 30, 505, 330);
    var x = myChart.addCategoryAxis("x", "yr");
    myChart.addMeasureAxis("y", "total");
    var s = myChart.addSeries("series", dimple.plot.area);
    myChart.addLegend(60, 10, 500, 20, "right");

    // Styling
    myChart.defaultColors = [
      new dimple.color("#895068"),
      new dimple.color("#DC8FAE"),
      new dimple.color("#D6759E"),
      new dimple.color("#F3D6E3"),
      new dimple.color("#F596BC")
    ];
    myChart.draw();
  });
}
