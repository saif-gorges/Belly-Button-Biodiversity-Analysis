// select data
var select_tag = d3.select('#selDaraset');

d3.json('samples.json').then((importedData) => {

    var subject_ids = importedData.names;

    console.log('Subject_ids')
    console.log(subject_ids)

    subject_ids.forEach((id) => {

        select_tag
        .append("option")
        .property('value', id)
        .text(id)
    });

//load first name 940
optionChanged(subject_ids[0]);
});

//select user innput and filter json data
function optionChanged(selected_id) {
    console.log('selected_id', selected_id);

    d3.json('samples.json').then((data) => {

        var samples = data.samples;
        var results = samples.filter(sampleObj => sampleObj.id == selected_id);

        console.log('samples:  ');
        console.log(samples);

        var results = results[0];

        console.log('results:   ');
        console.log(results);

        console.log('result  ');
        console.log(result);

        var otu_ids = result.otu_ids;
        var otu_labels = result.otu_labels;
        var sample_values = result.sample_values;

        var y_label = otu_ids.slice(0, 10).map(otuID => 'OTU ${otuID}').reverse();
    
    
    })


}