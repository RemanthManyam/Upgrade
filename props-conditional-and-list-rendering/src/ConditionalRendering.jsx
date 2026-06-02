import PropTypes, { bool, string } from 'prop-types';

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
        const welcomeMessage = <h2 className="welcome">Welcome {props.username}</h2>;
        const LoginPage = <h2 className="loginPage">Please Login to continue</h2>;

        return(props.isLoggedIn ? welcomeMessage : LoginPage);
}

ConditionalRendering.proptypes = {
    username: PropTypes.string,
    isLoggedIn: PropTypes.bool,
}

ConditionalRendering.defaultProps = {
    username: "Guest",
    isLoggedIn: false,
}

export default ConditionalRendering;