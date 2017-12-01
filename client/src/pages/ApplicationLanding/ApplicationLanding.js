import React,{Component} from "react";


class ApplicationLanding extends Component {
    

    render(){
        return(
            <div className = "container vertical-center horizontal-center">
                <div className = "jumbotron">
                    <h1 className = "text-center">Bling Stocks </h1>
                </div>
                <div className = "container vertical-center horizontal-center">
                    
                </div>
                <div className = "modal fade" id = "signInModal"  role = "dialog" aria-labelledby="noteModal" area-hidden = "true">
                    <div className = "modal-dialog">
                        <div className = "modal-content">
                            <div className = "modal-header">
                                <button type="button" className="close" data-dismiss="modal" aria-hidden="true"></button>
                                <h4 className = "modal-title" id="myModalLabel">Sign In</h4>
                            </div>
                            <div className = "modal-body">
                                <div className = "form-group">
                                    <form  id = "modalForm">
                                        <div className="form-group">
                                            <label id="title">title</label>
                                             <textarea 
                                                className="form-control"
                                                id="title" 
                                                rows = "1" 
                                                placeholder="enter the title here" 
                                                required>
                                            </textarea>
                                        </div>
                                        <div className="form-group">
                                            <label id="note">password</label>
                                                <textarea 
                                                    className="form-control" 
                                                    rows="1" 
                                                    id="note" 
                                                    placeholder="enter the text here" 
                                                    required>
                                                </textarea>
                                        </div>
                                    <button 
                                    type="button" 
                                    className="btn btn-secondary" 
                                    data-dismiss="modal">Close
                                    </button>
                                    <input type="submit" 
                                    className="btn btn-success saveNote" 
                                    value = "save"/>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default ApplicationLanding;