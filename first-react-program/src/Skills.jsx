function Skills(){

    const styling = "CSS";
    const language = "js";
    return(
        <skills>
        <ol>
        <li>HTML</li>
        <li>{styling}</li>
        <li>{language.toUpperCase()}</li>
       </ol> 
       {/* <hr></hr> */}
        </skills>
    );
}

export default Skills