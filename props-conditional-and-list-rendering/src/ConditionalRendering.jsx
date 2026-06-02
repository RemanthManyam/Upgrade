

function ConditionalRendering(props){

        //~~Method #1~~
        // if(props.isLoggedIn){
        //     return(<h4>Welcome {props.username} </h4>);
        // }
        // else{
        //     return(<h4>Please Login to continue</h4>);  
        // } 

        //~~Method #2~~
        // return(props.isLoggedIn ? <h2>Welcome {props.username}</h2> : 
        //                           <h2>Please Login to continue</h2>)

        //~~Method #3~~
        const welcomeMessage = <h2>Welcome {props.username}</h2>;
        const LoginPage = <h2>Please Login to continue</h2>;

        return(props.isLoggedIn ? welcomeMessage : LoginPage);
}

export default ConditionalRendering;