import React from 'react';
class Profile extends React.Component{
    constructor(props){
        super(props);
        this.state={
            userInfo:{
            name:"Dummy Name",
            location:"Dummy Location"
            }
        }
        console.log("child - constructor"+this.props.name);
    }
    /**async */ componentDidMount(){
        // it is called after render so api calls here 
        // const data=await fetch('https://api.github.com/users/VasuParashar37');
        // const json=await data.json();
        // console.log(json);
        // this.setState({
        //     userInfo:json,
        // })
        // this.timer=setInterval(()=>{
        //     console.log("Hello parashar");
        // },1000)
        console.log("child - componentDidMount"+this.props.name);
    }



    componentDidUpdate(){
        console.log("Component Did Update");
    }

    componentWillUnmount(){
        // clearInterval(this.timer);
        console.log("component Unmounted");
    }

    render(){
        // const{count}=this.state;  
        console.log("child - render"+this.props.name);      
        return (
            <div>
                <h1>Hello This is Class Based components </h1>
                <img src= {this.state.userInfo.avatar_url}/>
                <h2>Name:{this.state.userInfo.login}</h2>
                <h2>Location:{this.state.userInfo.location}</h2>
                {/* <h3>VAR:{this.props.var}</h3>
                <h3>Count:{this.state.count}</h3>
                <h3>Count2:{this.state.count2}</h3>

                <button onClick={(e)=>this.setState({
                    count:1,
                    count2:2,
                })}>Class</button> */}
            </div>

        )
    }
}
export default Profile;


/**
 * Parent constructor
 * parent render
 * child cons
 * child render
 * 
 * parent componentDidMount
 * log the api data (json)
 * child component Did Mount
 * 
 * setState triggers render once again
 * 
 * child render
 */