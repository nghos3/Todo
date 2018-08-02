import React from 'react';

class DisplayList extends React.Component
{ // eslint-disable-next-line
    constructor(props){
        super(props);
    }

    render(){
        
        return(
        
            <ul>
                {
                    this.props.items.map((item)=>{return(<li key={item.key}>{item.value}</li>);})
                }
            </ul>
            
        );
    }
}

export default DisplayList;