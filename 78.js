// document.getElementById("Div").style.backgroundColor = "black"
// var popo = document.getElementById("Div");
// popo.style = "background-color: grey";
window.onload = function() {

  var chart = new CanvasJS.Chart("Div", {
    theme: "light2", // "light1", "light2", "dark1", "dark2"
    exportEnabled: true,
    animationEnabled: true,
    backgroundColor:"#17223b" ,
    opacity:"0.5",
    corerRadius: 4,
    // title: {
    //   text: ""
    // },
    data: [{
      type: "pie",
      startAngle: 25,
      toolTipContent: "<b>{label}</b>: {y}%",
      showInLegend: "true",
      legendText: "{label}",
      indexLabelFontSize: 16,
      indexLabel: "{label} - {y}%",
      dataPoints: [
        { y: 51.08, label: "imports" },
        { y: 27.34, label: "Inflation rate" },
        { y: 10.62, label: "exports" },
        { y: 5.02, label: "gold reserve" },
        { y: 4.07, label: "food Inflation" },
        { y: 1.22, label: "foreign investment" },
        { y: 0.44, label: "Others" }
      ]
    }]
  });
  chart.render();
  
  }
