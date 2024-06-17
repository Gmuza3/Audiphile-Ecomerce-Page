import { NavLink } from "react-router-dom";
import style from "./style.module.css"

type Props ={
    isLink?:boolean,
    path?:string,
    text:string,
    handleClick?:() => void,
    buttonName:string
}
const Button = (props:Props) =>{
    const {text, handleClick, buttonName,isLink,path} = props;
    if(isLink && path){
        return(
            <>
                <NavLink to={path} className={`${style[buttonName]}`}>{text}</NavLink>
            </>
        )
    }
    return (
        <>
            <button className={`${style[buttonName]}`} onClick={handleClick}>{text}</button>
        </>
    )
}

export default Button