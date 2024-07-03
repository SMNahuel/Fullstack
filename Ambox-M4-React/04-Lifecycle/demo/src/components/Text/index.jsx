import { useEffect } from 'react';
import style from './style.module.css'

const TextComponent = ({text, type})=> {

    return(
        <p className={style[type]}>{text}</p>
    )
}

export default TextComponent;