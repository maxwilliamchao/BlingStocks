import axios from "axios";

export default {

    getStocks:function(data){
        const url = "https://www.alphavantage.co/query?"
        const apiKey = "Q4IXS4UBOYG17AYI"
        // function=TIME_SERIES_INTRADAY&symbol=TSLA&interval=60min&apikey=Q4IXS4UBOYG17AYI
        console.log(data.query)
        return axios.get(url,{
           params:{
               'function':"TIME_SERIES_INTRADAY",
                'symbol':data.query,
                'interval':"60min",
                'apikey':apiKey,
           } 
        })
        .then(function(response){
            return (response);
        })
        .catch(function(error){
            console.log(error);
        });
    },
    saveUser:function(data){
        axios.post("/api/user/signup",{
            username:data.username,
            email:data.email,
            password:data.password,
            phone:data.phone
        }).then(function(res){
            console.log(res);
        })
    },
    getUser:function(data){
        const username = data.username
        const password = data.password
        axios.get("/api/user/signin/"+username+"/"+password,{

        }).then(function(res){
            console.log(res);
        })
    },
    saveStock:function(data){
        const username = "brandon"
        const ticker = data.ticker
        console.log(ticker);
        axios.post("/api/user/dashboard", {
            username:username,
            ticker:ticker
        }).then(function(res,err){
                 console.log(res);
                 if(err){console.log(err)}
                 alert("the stock has been saved to the database")
             })
    },
    
    getSavedStocks: () => {
        return axios.get('/api/user/saved').then(function(res){
            return res;
        });
      }
    // ,
    //   removeStock: () => {
    //       const username = "brandon"
    //     return axios.delete('/api/user/saved', {username:username}
    //     })
    //   },
      

    // saveStock: stockObj => {
    //     return axios.post('/api/stock', stockObj);
    // },
    
    // getSavedStocks: () => {
    //     return axios.get('/api/stock');
    // },

    // removeStock: id => {
    //     return axios.delete('/api/stock/' + id)
    // }
};




  

  



