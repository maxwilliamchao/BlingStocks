render() {
    return (
      <div>
        <Searchbar>
        
        </Searchbar>
        <div className="container">
          <Searchresults  
          //   topic = {this.state.topic}
          //   startYr = {this.state.startYr}
          //   endYr = {this.state.endYr}
          //   handleFormSubmit={this.handleFormSubmit}
          //   handleInputChange={this.handleInputChange}
          />
          <Searchresults results={this.state.results} />
          <Watchlist />
        </div>
      </div>
    )
  }