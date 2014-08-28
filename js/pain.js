$( document ).ready(function() {
  // Create filters
  app.createPainFilters();
  app.createPainBarGraph("2013");
});

app.createPainFilters = function() {
  var filterDiv = $("#pain-bar-filter");

  var years = ["2007", "2008", "2009", "2010", "2011", "2012", "2013", "2014"];

  $.each(years, function(index, year) {
    var button = $('<a/>',
    {
      class: 'filterButton',
      text: year,
      click: function (e) { 
        var activeButton = $(".filterButton.active");
        if(activeButton){
          $(activeButton).removeClass('active');
        }
        app.createPainBarGraph(year);
        $(e.target).addClass('active');      
      }
    });

    filterDiv.append(button);
  });
}

app.createPainBarGraph = function(filter) {
  d3.csv("data/pain-bar.csv", function(data) {
    data = dimple.filterData(data, "yr", filter);
    app.populateBarGraph("pain", data);
  });
}