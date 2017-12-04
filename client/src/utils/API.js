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
        axios.post("/saved",{
            username:data.username,
            email:data.email,
            password:data.password,
            phone:data.phone
        }).then(function(res){
            console.log(res);
        })
    }
    // getSavedStocks: () => {
    //     return axios.get('/api/stock');
    //   },
    //   removeStock: id => {
    //     return axios.delete('/api/stock/' + id)
    //   },
      
};




  

  



