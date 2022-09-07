// هنا المستوى الشرائي للفرد
  var Purchasing = {
    x: [1, 2, 3, 4],
    y: [10, 15, 13, 17],
    mode: 'markers',
      opacity: 1,
      marker: {
          color: 'red',
          size: [20, 20, 20, 20]
      }
  };
  // هنا  مستوى العرض الشراء
  var supply = {
    x: [1, 2, 3, 4],
    y: [5, 12, 18, 7],
    mode: 'markers',
      opacity: 1,
      marker: {
          color: 'blue',
          size: [20, 20, 20, 20]
      }
  };
  // هنا  مستوى الطلب
  var demand = {
    x: [1, 2, 3, 4],
    y: [20, 8, 12, 12],
    mode: 'markers',
      opacity: 1,
      marker: {
          color: 'green',
          size: [20, 20, 20, 20]
      }
  };
  var data = [Purchasing, supply, demand];
  
  var layout = {
    title: 'Supply and demand for the individual in Kuwait'
  };
  
  var update = {
      opacity: 0.5,
        marker: {
      size: [40, 60, 80, 100],
      color: ['rgb(93, 164, 214)', 'rgb(255, 144, 14)',  'rgb(44, 160, 101)', 'rgb(255, 65, 54)'],
      backgroundColor:"#17223b" ,
    }
  }
  
  Plotly.newPlot(graphDiv, data, layout);
  
  Plotly.restyle(graphDiv, update, 0);
  
  var update2 = {
      'opacity': 0.4,
      'marker.color': 'purple',
      // 'fillcolor':'#d3d3d3',
  };
  Plotly.restyle(graphDiv, update2, 2);