import React from 'react';

class CourseList extends React.Component {
    handleClickDel = () => {
        this.props.deleteOn(this.props.index)
    }
    render () {
        const {name} = this.props;
        return (
            <div>
                <li>
                    {name}
                   {/*  <span onClick={this.handleClick}>Pensil</span>
                    <span onClick={this.handleClickOk}>OK</span> */}
                    <span onClick={this.handleClickDel}>×</span>
                </li>
            </div>
        )
    }
}

export default CourseList;