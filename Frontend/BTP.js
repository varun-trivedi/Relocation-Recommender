document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('parametersForm');
    
    form.addEventListener('submit', function(event) {
      event.preventDefault();
  
      // Get values of all parameters
      const AQI= document.getElementById('AQI').value;
      const Litracy_Rate=document.getElementById('Literacy_Rate').value;
      const PopulationDensity = document.getElementById('PopulationDensity').value;
      const crimeRate = document.getElementById('crimeRate').value;
      const SafetyIndex = document.getElementById('SafetyIndex').value;
      const PropertyPrice_Income = document.getElementById('PropertyPrice_Income').value;
      const AverageRainfall = document.getElementById('AverageRainfall').value;
      const Traffic = document.getElementById('Traffic').value;
      const UnemploymentRate = document.getElementById('UnemploymentRate').value;
      const LifeExpectancy = document.getElementById('LifeExpectancy').value;
      const Factories = document.getElementById('Factories').value;
      const WorkersEngaged = document.getElementById('WorkersEngaged').value;
      const foodprices = document.getElementById('foodprices').value;
      const healthcareindex = document.getElementById('healthcareindex').value;
      const pollutionindex = document.getElementById('pollutionindex').value;
      const feature_array=[
        {
            'AQI':AQI,
            'Litracy Rate': Litracy_Rate,
            'Population Density': PopulationDensity,
            'Crime Rate': crimeRate,
            'Safety Index': SafetyIndex,
            'Property Price/Income': PropertyPrice_Income,
            'Average Rainfall':AverageRainfall,
            'Traffic': Traffic,
            'Unemployment Rate':UnemploymentRate,
            'Life Expectancy': LifeExpectancy,
            'Factories': Factories,
            'Workers Engaged':WorkersEngaged,
            'Food Prices':foodprices,
            'HealthCare Index': healthcareindex,
            'Pollution Index': pollutionindex
        }
    ];

      // You can then send this data to a server for further processing or display
      console.log("Population Density:", PopulationDensity);

      // For demonstration purposes, you can display an alert indicating successful submission
      downloadCsv("user_data.csv", json2csv.parse(feature_array));
      alert("Parameters submitted successfully!");
      fetch('Untitled-1.json')
      .then((response) => response.json())
      .then((json) => console.log(json));
    });
    function downloadCsv(filename, csvData) {
        const element = document.createElement("a");

        element.setAttribute("href", `data:text/csv;charset=utf-8,${csvData}`);
        element.setAttribute("download", filename);
        element.style.display = "none";

        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
    }
    // Update slider values display
    const sliders = document.querySelectorAll('.slider');
    sliders.forEach(slider => {
      const output = document.getElementById(slider.id + 'Value');
      output.textContent = slider.value;
  
      slider.addEventListener('input', function() {
        output.textContent = this.value;
      });
    });
  });
  