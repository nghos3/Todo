    import React, {Component} from 'react'; 

    class TodoAdd extends Component 
    {    constructor(props)
        {
            super(props);
            this.state={val:[]};
            this.updateVal=this.updateVal.bind(this);
            this.handleSubmit=this.handleSubmit.bind(this);
        }

        handleSubmit(e)
        {
            console.log("submitted");
            e.preventDefault();
            console.log(this.state.val);

        }
        updateVal(e) {
        console.log(e.target.value);
        this.setState({val: e.target.value});
        console.log("state : "+this.state.val);
        }
        render(){
            return(
                <div className="addTodo" >
                <form onSubmit={this.handleSubmit}>
                <input type="text" value={this.state.val}   onChange={this.updateVal}/>
                <button type="submit">add</button>
                </form>
                </div>
            );
        }
    }

    export default TodoAdd;