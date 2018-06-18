import React from 'react';

class Lessons extends React.Component {
    handleChange = () => {
        console.log('change')
    }
    rend = () => {
        const url = this.props.match.params.par ;
        const urlLes = this.props.match.params.lesson ;
        const arr = this.props.stat;
        const finI = (key) => {
            return key.name === url
        }
        const x = arr.findIndex(finI);
        const list = this.props.stat[x].folder;        

        const xX = (ley) => {
            return ley.name === urlLes
        };
        const r = list.findIndex(xX)
        const urll = this.props.stat[x].folder[r].folder;
        
        //console.log('urll',urll);
         if (urll)  {
            console.log("List true")
        } else {
            console.log("List false");
            return (<div>List is empty</div>)
        }          
        console.log(urll);
        return (
            <div>
                {
                    urll.map((x) => (
                        <li key={x.word}>                            
                                {x.word}
                                {x.translate}
                                {x.complete}
                                <input type="checkbox" onChange={this.handleChange}/>
                                <button>x</button>
                            {/* <Link to={`/${url}/${x.name}`}>
                            </Link> */}
                        </li>))
                }                
            </div>)
    } 

    render() {
        const url = this.props;
        //console.log(url)
        return(
            <div>
                <h1>Lesson one Component</h1>
                {this.rend()}
            </div>
        )
    }
}

export default Lessons;