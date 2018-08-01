import React, {Component} from 'react'; 

class TodoAdd extends Component 
{    constructor(props)
    {
        super(props);
        this.state={val:[]};
        this.handleSubmit=this.handleSubmit.bind(this);
    }
        handleSubmit(e){
            
            console.log(this.inp.value);
            if(this.inp.value !== ""){
                const obj = {key:Date.now(),value:this.inp.value}
            this.setState(prevState => ({
                val: [...prevState.val,obj]
            }))}
            this.inp.value='';
            e.preventDefault();
            console.log(this.state.val);
        }
    render(){
        return(
            <div className="addTodo" >
            <form onSubmit={this.handleSubmit} >
            <input type="text" ref={a => (this.inp = a)}/>
            <button type="submit">add</button>
            </form>
            </div>
        );
    }
    componentDidUpdate(){
        return(
        console.log(this.state.val)
        );}
   
}

export default TodoAdd;