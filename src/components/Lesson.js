import React from 'react';

class Lessons extends React.Component {
    handleChange = () => {
        console.log('change')
    }
    /* rend = () => {
        const url = this.props.match.params.par ;
        const urlLes = this.props.match.params.lesson ;
        const arr = this.props.stat;
        const finI = (key) => {
            return key.name === url
        }
        const x = arr.findIndex(finI);
        const list = this.props.stat[x].folder;        
        // <input type="checkbox" onChange={this.handleChange}/>
    }    */

    render() {
        //const url = this.props;
        //console.log(url)
        return(
            <div>
                <h1>Lesson one Component</h1>                
            </div>
        )
    }
}

export default Lessons;