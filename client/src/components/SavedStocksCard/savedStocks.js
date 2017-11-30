class Saved extends Component{
  state = {
    savedStocks: []
  }

componentDidMount(){
  this.loadStocks();
}

loadStocks = () => {
//this will be a call to the database to retrieve list of stocks saved in database.
}

render() {
    return(
      <div>
        <div className="container">
          <div className="panel panel-primary">
            <div className="panel-heading">
              Saved Stocks
            </div>
            <div className="panel-body">
              <Stock>
              <Stock/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}