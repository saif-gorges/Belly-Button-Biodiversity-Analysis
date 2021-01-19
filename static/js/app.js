
  // 1. Create the buildCharts function.
  function buildCharts(sample) {
    // 2. Use d3.json to load and retrieve the samples.json file 
    d3.json("samples.json").then((data) => {
        console.log(data)

      // 3. Create a variable that holds the samples array. 

    var values = unpack(data.samples.sample_values, 3);
    var labels = unpack(data.samples.otu_ids, 1);
    var hoverText = unpack(data.samples.otu_labels, 2);
    
    console.log(values)
    console.log(labels)
    console.log(hoverText)

    });
}; 

retreiveData();
      // 4. Create a variable that filters the samples for the object with the desired sample number.
  
      //  5. Create a variable that holds the first sample in the array.
  
  
      // 6. Create variables that hold the otu_ids, otu_labels, and sample_values.
  
  
      // 7. Create the yticks for the bar chart.
      // Hint: Get the the top 10 otu_ids and map them in descending order  
      //  so the otu_ids with the most bacteria are last. 
  
      var yticks = 
  
      // 8. Create the trace for the bar chart. 
      var barData = [
        
      ];
      // 9. Create the layout for the bar chart. 
      var barLayout = {
       
      };
      // 10. Use Plotly to plot the data with the layout. 
      
    });
  }