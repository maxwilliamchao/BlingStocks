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
            if(res){
                alert("signup successful");
                window.location.href = "/"
            }
        })
    },
    getUser:function(data){
        const username = data.username
        const password = data.password
        axios.post("/api/user/signin",{
            username:username,
            password:password
        }).then(function(res){
            console.log(res);
            if(res.data.auth){
                 
                window.location.href = "/dashboard"
            }else{
                alert("incorrect login");
            }
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
      },
    // ,
      removeStock: data => {
          console.log(data)
          var attribute  = data.attribute
          return axios.put('/api/user/saved',{attribute:attribute}).then(function(res){
              if(res){
                  window.location.href = "/saved"
              }
          })
        }
      
      

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




  

  



