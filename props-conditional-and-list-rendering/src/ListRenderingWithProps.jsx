import { array } from "prop-types";


function ListRenderingWithProps(props){

    const title = props.title;
    const arr = props.arr

    const list = arr.map((ele) => <li key={ele.id}>
                                     {ele.name}: &nbsp;<br></br>
                                    Copies Sold: <i>{ele.copiesSold}</i>M
    </li>)

    return(<><h3>{title}</h3> <ol>{list}</ol></>);
}

export default ListRenderingWithProps;