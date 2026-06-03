import PropTypes, { number, string } from "prop-types";


function ListRenderingWithProps(props){

    const heading = props.title;
    const listItems = props.listData;

    const displayList = listItems.map((ele) => <li key={ele.uid}>
                                               Name: <b>{ele.name}</b><br></br>
                                               Collections: <i>{ele.data}M</i>
    </li>)



    return(<><h3 className="title">{heading}</h3> <ol className="content">{displayList}</ol></>);

}


export default ListRenderingWithProps;