import React from 'react';
import { Link } from 'react-router-dom';
import Lessons from './Lessons';


class MainList extends React.Component {
        constructor(props) {
        super(props)
    }

    handleclick = () => {
        this.props.courceDelete(this.props.id)
        //console.log('id',this.props.id)
    }

    render () {
        const {  name , folder, id} = this.props;       

        return (      
            <div>      
                <ul className="menu-fish">                
                    <Link to={`${name}`}> {name} </Link>
                    <button onClick={this.handleclick}>x</button>
                </ul>                 
            </div>       
        )
    }
}

export default MainList;