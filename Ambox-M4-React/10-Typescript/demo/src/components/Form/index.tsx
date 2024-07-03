import { useState } from "react";
import { FormComponentProps } from "../../interface";
import { Sexo } from "../../type";

const FormComponent: React.FC<FormComponentProps> = ({ datos }) => {
  const [input, setInput] = useState<{
    Nombre: string | null;
    Edad: number | null;
    Sexo: Sexo | null;
  }>({
    Nombre: null,
    Edad: null,
    Sexo: null,
  });
  return (
    <>
      <form>
        {datos.map((item, index) => {
          return (
            <div
              key={index}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <label>{item.name}</label>
              <input
                name={item.name}
                type={item.type}
                onChange={(e) =>
                  setInput({
                    ...input,
                    [item.name]: e.target.value,
                  })
                }
              />
            </div>
          );
        })}
      </form>
    </>
  );
};

export default FormComponent;
