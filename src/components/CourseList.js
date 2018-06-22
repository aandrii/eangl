import React from 'react';
import { Link , Route} from 'react-router-dom';
import {resf, ref} from "../base";

class CourseList extends React.Component {
    handleClickDel = () => {
        this.props.deleteOn(this.props.index)
    }
    hClick = () => {
        console.log('clickeddd', this.props.index);
        resf.ref('lessons').set({lessons: this.props.index})
    }
    render () {
        const {name} = this.props;
        return (
            <div>
                <li>
                    <Link to={name} onClick={this.hClick}>{name} </Link>                   
                   {/*  <span onClick={this.handleClick}>Pensil</span>
                    <span onClick={this.handleClickOk}>OK</span> */}
                    <span onClick={this.handleClickDel}>×</span>
                </li>
            </div>
        )
    }
}

export default CourseList;