import { useContext } from "react";
import { ThemeContext } from "../AppContext";

const InputContext = () => {
    const theme = useContext(ThemeContext);
    
    return(
        <div>
            <p>{theme}</p>
            
        </div>
    )
}
export default InputContext