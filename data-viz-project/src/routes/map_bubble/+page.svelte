<h1> Number of customers and total revenue per nation</h1>

<script>
  import { onMount } from "svelte";
  import L from "leaflet";
  import * as d3 from 'd3';
  import { scaleLinear } from 'd3-scale';

  const scaleR = scaleLinear().domain([0,160]).range([0,50])
  const scaleColour = scaleLinear().domain([1000000,160000000]).range(["#fff5f0","#67000d"])
  const scaleR2 = scaleLinear().domain([1000000,160000000]).range([0,70])
  const scaleColour2 = scaleLinear().domain([0,160]).range(["#fff5f0","#67000d"])
  const color_region = d3.scaleOrdinal(["Amnian Empire", "Bloodlands Empire", "Calim Empire",
                                       "Dwarven Empire", "Eastern Empire", "Halruaan Empire",
                                       "New Neverwinter Empire", "None Empire", "Old Empire",
                                       "Purple Dragon Empire", "Southern Empire", "Thayan Empire",
                                       "United Moonshae Empire", "Waterdhavian Empire", "Western Empire"], 
                                       ["#2673a3","#b0799a","#ef8737",
                                       "#355828","#6c5d9e","#bf3729",
                                       "#e48171","#f5bb50","#9d9cd5",
                                       "#17154f","#f6b3b0","#ada43b", 
                                       "#8b3a2b", "#b38711","#9cc184"])

  onMount(async function() { 
  let data = await d3.csv('https://raw.githubusercontent.com/trangtph/Programming/main/Processed_data/nation_customer_revenue.csv');

  var map = L.map('map', {crs: L.CRS.Simple, minZoom: -1});

    var imageUrl = 'https://github.com/trangtph/Map_Forgotten_Realms/blob/main/Map_Forgotten_Realms_off.png?raw=true';
    var imageBounds = [[0,0], [660,1000]];
    var image = L.imageOverlay(imageUrl, imageBounds).addTo(map);
    map.fitBounds(imageBounds);


  for (var i in data) {
    var row = data[i];
    var circle_color =  scaleColour2(row.n_customer);
    var radius_transform = scaleR2(row.revenue);
    var border_transform = color_region(row.Region);
    var pop_up_text = 'Nation: ' +  row.Nation + '<br>' + 'Region: ' + row.Region + 
        '<br>' + 'Number of customer: ' + row.n_customer +', rank ' + row.rank_n_customer +
        '<br>' + 'Total revenue: ' + row.revenue_round +' Million CP' +', rank ' + row.rank_revenue ;


    var circle = L.circle([row.y_coord, row.x_coord],{
                          radius: radius_transform,
                          color: border_transform,
                          fillColor:  circle_color,
                          fillOpacity: 0.8
                        });
    circle.bindTooltip(pop_up_text);
    circle.addTo(map);
  } 
  
  });
</script>

<svelte:head>
<link
  rel="stylesheet"
  href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css"
  crossorigin=""
/>

<script
  src="https://unpkg.com/leaflet@1.6.0/dist/leaflet.js"
  crossorigin=""
>
</script>
</svelte:head>

<div id="map">
  <div id="missing">
    Nations with missing data <br> on location
  </div>

  <div id = "encoding">
    <h3> Visual Encoding:</h3>
    <ul>
      <li>Circle size: total revenue</li>
      <li>Circle color saturation: number of customer</li>
      <li>Circle outline color: the region that the nation belongs to</li>
      </ul>
  </div>
</div> 


<style>
#map {
    height: 660px;
}

#missing {
  position: absolute;
  top: 5px;
  left: 270px;
  font-weight: bold;
  font-size: 12px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background: white;
  border-radius: 5px;
  padding: 5px 10px;
}

#encoding {
  position: absolute;
  right: 0px;
  bottom: 0px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background: white;
  border-radius: 5px;
  padding: 5px 10px;
}

  h1 {
    color: #67000d;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    text-align: center;
  }

  h3 {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }

  ul {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }
  

</style>
