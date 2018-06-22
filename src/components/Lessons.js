import React from 'react';
import { Link , Route} from 'react-router-dom';
import {resf, ref} from "../base";



class Lessons extends React.Component {
    nameRef = React.createRef();
    state = {returnArr: null,key: null}
    componentDidMount () {
        this.readId();
        if(this.state.key) {
            console.log("key", this.state.key)
        }  
        this.readHandle();
    }
    readId = () => {
        resf.ref('lessons').on('value', (data) =>this.setState({ key: data.val().lessons }))
        console.log("read key")
    }

    readHandle = () => {
        const key = this.state.key;
        console.log("key", key)
        resf.ref(`users/${key}/folder`).on('value', this.snapshotToArray);        
    } 

    snapshotToArray = (snapshot) =>{
        var returnArr = [];
    
        snapshot.forEach(function(childSnapshot) {
            var item = childSnapshot.val();
            item.key = childSnapshot.key;
    
            returnArr.push(item);
            console.log('item',item )    
        });
        this.setState({returnArr})
        return returnArr;
    };

    writeUserData = (name) => {
        const key = this.state.key;
        const playersRef =  resf.ref(`users/${key}/folder`);
        playersRef.push ({name: name, id: Date.now()});      
    } 
    
    handleClick = () => {        
        const sta = this.nameRef.current.value;        
        this.writeUserData(sta);
        this.nameRef.current.value = '';  
    }
    
    handleDelete = id => {
        console.log(id);
        resf.ref(`users`).child(id).remove();
    }

    handleUpdate = (id, name) => {
        resf.ref(`users`).child(id).update({ name: name})
        //this.handleUpdate( '-LFaSfGU0bWdhqrmZc1L' ,'mmmm')
    }

/* 
    handleclick = () => {
        const url = this.props.match.params.lessons;
        console.log(url)
    }
    state = {returnArr: null}
    nameRef = React.createRef();

    handleClick = () => {
        console.log('sadf');
        const sta = this.nameRef.current.value;
        this.writeUserData(this.nameRef.current.value);
        this.nameRef.current.value = '';  
    }

    writeUserData = () => {
        const id = resf.ref('lessons').on('value', (data) =>this.setState({ data: data.val().lessons }));
        console.log('courseId')
        // const playersRef =  resf.ref('users');
        // playersRef.push ({name: name, id: Date.now()});      
    } 
 */
   /*  componentDidMount () {
        this.readHandle(); 
    }

    readHandle = () => {
        resf.ref('users').on('value', this.snapshotToArray);
    }  

    snapshotToArray = (snapshot) =>{
        var returnArr = [];

        snapshot.forEach(function(childSnapshot) {
            var item = childSnapshot.val();
            item.key = childSnapshot.key;

            returnArr.push(item);
        });
        console.log('returnArr',returnArr);
        this.setState({returnArr})
        return returnArr;
    };

  



  handleDelete = id => {
    console.log(id);
    resf.ref(`users`).child(id).remove();   
  } */

    /* rend = () => {       
        const finI = (key) => {
            return key.name === url
        }
        const x = arr.findIndex(finI);
                                     
        <Link to={`/${url}/${x.name}`}>
            {x.name}
            <button>x</button>
        </Link>
    } */
                       
    render() {
        if(!this.state.returnArr) {
            return <h1>Loading Database</h1>
        }        
        return(
            <div>
                <h1>Lessons Component</h1>
                
                {/* <Link to={`/${url}/lesson`}> Lesson 1 </Link> */}               
                <input type="text" ref={this.nameRef} placeholder="add lesson"/>
                <button onClick={this.handleClick}>ADD</button>
            </div>
        )
    }
}

export default Lessons;