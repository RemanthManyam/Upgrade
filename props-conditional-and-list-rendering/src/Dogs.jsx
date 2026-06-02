import PropTypes from 'prop-types';

function Dogs(props){

    return(<div className="dogs">
        <p>Name: {props.name} </p>
        <p>Age: {props.age}</p> 
        <p>Is Vaccinated: {props.isVaccinated ? "Yes" : "No"} </p>
    </div>);
}

Dogs.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isVaccinated: PropTypes.bool,
}

Dogs.defaultProps = {
    name: "Guest",
    age: 0,
    isVaccinated: false,
}

export default Dogs;