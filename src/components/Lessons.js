import React from 'react';
import { Link , Route} from 'react-router-dom';
import base from "../base";


class Lessons extends React.Component {
   /*  state = {
        dictionary: {},
        lessons: []
    }
    componentDidMount() {      
       /*  this.ref = base.syncState(`dictionary`, {
          context: this,
          asArray: true,
          state: "dictionary"
        });   
        console.log('componentDidMount')
    } 
   /*  componentWillMount() {
        this.ref = base.syncState(`dictionary`, {
            context: this,
            asArray: true,
            state: "dictionary"
          }); 
          
          console.log('componentWillMount')

    }    
    componentDidUpdate() {
        const arr = this.state.dictionary;
        const url = this.props.match.params.par ;
        const finI = (key) => {
            return key.name === url
        }
        const x = arr.findIndex(finI);        
        const {folder}  = arr[x];
        //this.setState({lessons: folder});
        console.log('componentDidUpdate')
    }
 */
    /* componentWillUnmount() {
        base.removeBinding(this.ref);
        console.log('Lessons componentWillUnmount')
    } 
    
    handleclick = () => {
        /* const arr = this.state.dictionary;
        const url = this.props.match.params.par ;
        const finI = (key) => {
            return key.name === url
        }
        const x = arr.findIndex(finI);        
        const {folder}  = arr[x]; 
        //console.log(folder);
    }*/
    
    rend = () => {
        const url = this.props.match.params.par ;
        const arr = this.props.stat;
        const finI = (key) => {
            return key.name === url
        }
        const x = arr.findIndex(finI);
        const list = this.props.stat[x].folder;
        if (list)  {
            console.log("List true")
        } else {
            console.log("List false");
            return (<div>List is empty</div>)
        }          
        console.log(list);
        return (
            <div>
                {
                    list.map((x) => (
                        <li key={x.name}>                            
                            <Link to={`/${url}/${x.name}`}>
                                {x.name}
                                <button>x</button>
                            </Link>
                        </li>))
                }                
            </div>)
    } 
    render() {
        
        return(
            <div>
                <button onClick={this.handleclick}>sta</button>
                <h1>Lessons Component</h1>
                
                {/* <Link to={`/${url}/lesson`}> Lesson 1 </Link> */}
                {this.rend()}
                <input type="text" placeholder="add lesson"/>
            </div>
        )
    }
}

export default Lessons;