import React, {Component} from 'react'; 
import DisplayList from './displayList';
class TodoAdd extends Component 
{    constructor(props)
    {
        super(props);
        this.state={val:[]};
        this.handleSubmit=this.handleSubmit.bind(this);
    }
        handleSubmit(e){
            
            if(this.inp.value !== ""){
                const obj = {key:Date.now(),value:this.inp.value}
            this.setState(prevState => ({
                val: [...prevState.val,obj]
            }))}
            this.inp.value='';
            e.preventDefault();
        
        }
    render(){
        return(
            <div className="addTodo" >
            <form onSubmit={this.handleSubmit} >
            <input type="text" ref={a => (this.inp = a)}/>
            <button type="submit">add</button>
            </form>
            <DisplayList items={this.state.val}/>
            </div>
        );
    }

}

export default TodoAdd;