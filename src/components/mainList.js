import React from 'react';

class MainList extends React.Component {
  constructor(props) {
      super(props)
  }
    render () {
        const {  name , folder} = this.props;       
        
        return (            
            <ul className="menu-fish">
               <p>{name}</p>               
            </ul>        
        )
    }
}

export default MainList;