import { useContext } from "react";
import { ThemeContext } from "../AppContext";
const ButtonContext = () => {
  const theme = useContext(ThemeContext);
  return (
    <div>
      <input type="text" />

    </div>
  );
};
export default ButtonContext;
