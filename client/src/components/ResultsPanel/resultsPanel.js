import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Chart from 'chart.js';



class ResultsPanel extends React.Component {
  constructor(props){
    super(props)
  }

  componentDidMount(){
    var ctx = document.getElementById("myChart").getContext('2d');
        var myChart = new Chart(ctx, {
        type: 'line',
        data: {
      labels: [0,200,400,600,800,1000,1200,1400,1600,1800],
      datasets: [{ 
          data: [1000,1114,1206,1006,907,1110,1130,1100,1050,1075],
          label: "stockSymbol",
          borderColor: "#3e95cd",
          fill: false
        }]
      },
      options: {
        responsive: true
        // maintainaspectratio: false
      }

        });
  }

  render(){
  return <Card>
      <CardHeader
        // title="stockName"
        // subtitle="stockSymbol"
      />
      <CardMedia
        // overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
      >

      <div class="row">
      <div class="col-xs-6">
    <canvas id="myChart" width="400" height="400"></canvas>
      </div>
      <div class="col-xs-6">
      </div>
      </div>
        
      </CardMedia>
      <CardTitle title="{res.data.Symbol}" />
      <CardText>
        <p>Open: fromAPIcall</p>
        <p>High: fromAPIcall</p>
        <p>Low: fromAPIcall</p>
        <p>Close: fromAPIcall</p>
      </CardText>
      <CardActions>
        <FlatButton label="Action1" />
        <FlatButton label="Action2" />
      </CardActions>
    </Card>
  }




}

export default ResultsPanel;








// <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.4.0/Chart.min.js"></script>


// import React from 'react';
// // import axios from 'axios';


// <div class="panel panel-default">
//   <div class="panel-heading">Search Results</div>
//   <div class="panel-body">
//     <div class="row">
//       {stockName}
//     </div>
//     <div class="row">
//       <div id="chartPlaceholder">

//       </div>
//     </div>
//     <div class="row">
//       <div id="infoPlaceholder">
//         //obj here
//       </div>
//     </div>
//     <div class="row">
//       <button type="button" class="btn btn-lg btn-primary">Add to Watchlist</button>
//     </div>
//   </div>
// </div>


// <Card>
//     <CardHeader
//       title="stockName"
//       subtitle="stockSymbol"
//     />
//     <CardMedia
//       // overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
//     >

    


    
      
//     </CardMedia>
//     <CardTitle title="stockName" subtitle="stockSymbol" />
//     <CardText>
//       Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//       Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
//       Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
//       Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
//     </CardText>
//     <CardActions>
//       <FlatButton label="Action1" />
//       <FlatButton label="Action2" />
//     </CardActions>
//   </Card>

/*  ****************************************************************** */

// import React, { Component } from 'react';
// import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
// import FlatButton from 'material-ui/FlatButton';
// import Chart from 'chart.js';



// class ResultsPanel extends Component{

// componentDidMount()
// {
//   const ctx = (this.refs.Graph).getContext('2d');
//   this.displayGraph(ctx);
// }

// displayGraph = (obj) => {
    
//       const myChart = new Chart(obj, {
//       type: 'line',
//       data: {
//     labels: [1500,1600,1700,1750,1800,1850,1900,1950,1999,2050],
//     datasets: [{ 
//         data: [86,114,106,106,107,111,133,221,783,2478],
//         label: "Africa",
//         borderColor: "#3e95cd",
//         fill: false
//       }, { 
//         data: [282,350,411,502,635,809,947,1402,1700,1867],
//         label: "Asia",
//         borderColor: "#8e5ea2",
//         fill: false
//       }, { 
//         data: [168,170,178,190,203,276,408,547,675,734],
//         label: "Europe",
//         borderColor: "#3cba9f",
//         fill: false
//       }, { 
//         data: [40,20,10,16,24,38,74,167,508,784],
//         label: "Latin America",
//         borderColor: "#e8c3b9",
//         fill: false
//       }, { 
//         data: [6,3,2,2,7,26,82,172,312,433],
//         label: "North America",
//         borderColor: "#c45850",
//         fill: false
//       }]
//     },
//     options: {
//       responsive: false
//     }

//       });
// }

// render(){
//   return(
//     <Card>
//           <CardHeader
//             title="stockName"
//             subtitle="stockSymbol"
//           />
//           <CardMedia
//             // overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
//           >

//           <div id = "chart" ref = "Graph">
            
//           </div>
//           </CardMedia>
//           <CardTitle title="stockName" subtitle="stockSymbol" />
//           <CardText>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//             Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
//             Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
//             Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
//           </CardText>
//           <CardActions>
//             <FlatButton label="Action1" />
//             <FlatButton label="Action2" />
//           </CardActions>
//   </Card>


//     );

// }

// }


// export default ResultsPanel;