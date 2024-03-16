var ctx = document.getElementById("myDonutChart").getContext("2d");

document.getElementById("myDonutChart").width = 250;
document.getElementById("myDonutChart").height = 250;

var myDonutChart = new Chart(ctx, {
  type: "doughnut",
  data: {
    labels: ["Gotówka", "Oszczedności", "Inwestycje"],
    datasets: [
      {
        label: "Kwota",
        data: [30, 50, 20],
        backgroundColor: [
          "rgba(255, 99, 132, 0.5)",
          "rgba(54, 162, 235, 0.5)",
          "rgba(255, 206, 86, 0.5)",
        ],
        hoverOffset: 4,
      },
    ],
  },
  options: {
    responsive: true,
    aspectRatio: 1,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "",
      },
    },
  },
});
