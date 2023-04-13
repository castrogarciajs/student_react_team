export const Button =(props)=>{
    return(
        <button style={{width:"30px"}} onClick={()=>props.addFunction(props.children)}>{props.children}</button>
    );
}