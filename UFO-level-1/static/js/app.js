// from data.js
var tableData = data;

let tbody = d3.select("tbody");
console.log(tableData);

// tableData.forEach((date) => {
//     const row = tbody.append("tr");
   
//     for (key in date){
//         const cell = row.append("td");
//         cell.text(date[key]);
//     }
// });
function buildTable(tableData){
    tbody.html("");


tableData.forEach((data) => {
    var row = tbody.append("tr");
    Object.values(data).forEach((val) => {
        var cell = row.append("td");
          cell.text(val);
        });

});
}

//?
   

        // for (key in data){
        //     const cell = row.append("td");
        //     cell.text(data[key]);
        // }


function clickFunction(){
    var inputValue = d3.select("#datetime").property("value");
    let tableData1 = tableData;
    
    if(inputValue){
        tableData1 = tableData1.filter(row=>row.datetime === inputValue);
    console.log(inputValue);
    
    console.log(tableData1);
    }
    buildTable(tableData1);
       
}
d3.selectAll("#filter-btn").on("click", clickFunction);
buildTable(tableData);
    // const filterDate = tableData.filter(tableData => tableData.Date === inputValue);
    // console.log(filterDate).text(filterDate);
    // row.forEach in tableData(() => {
    //     cell.text(filterDate);
    //     });
    // });

//build everything inside of this loop ^
//to clear out - example
//d3.select("#stockInput").node().value = "";

//an example of what to do in the hw: 
// function buildTable(dates, openPrices, highPrices, lowPrices, closingPrices, volume) {
//     const tbody = d3.select("#summary-table>tbody");
//     for (let i=0; i<dates.length; i++){
//         const trow = tbody.append("tr");
//         trow.append("td").text(dates[i]);
//         trow.append("td").text(openPrices[i]);
//         trow.append("td").text(highPrices[i]);
//         trow.append("td").text(lowPrices[i]);
//         trow.append("td").text(closingPrices[i]);
//         trow.append("td").text(volume[i]);
//     }

//broken *




//3.3
// const submit = d3.select("#submit");
// submit.on("click", function() {
//     // Prevent the page from refreshing
//     d3.event.preventDefault();
//     // Select the input element and get the raw HTML node
//     const inputElement = d3.select("#example-form-input");
//     // Get the value property of the input element
//     const inputValue = inputElement.property("value");
//     console.log(inputValue);
//     // Set the span tag in the h1 element to the text
//     // that was entered in the form
//     d3.select("h1>span").text(inputValue);
// });

//3.9
// // Assign the data from `data.js` to a descriptive constiable
// const people = data;
// // Select the submit button
// const submit = d3.select("#submit");
// submit.on("click", function() {
//   // Prevent the page from refreshing
//   d3.event.preventDefault();
//   // Select the input element and get the raw HTML node
//   const inputElement = d3.select("#patient-form-input");
//   // Get the value property of the input element
//   const inputValue = inputElement.property("value");
//   console.log(inputValue);
////this part 
//   console.log(people);
//   const filteredData = people.filter(person => person.bloodType === inputValue);
//   console.log(filteredData);

