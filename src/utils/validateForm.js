

import { object, string, number, date,mixed} from 'yup';

let userSchema = object({
    fullname: string().required("Completa el campo Nombre"),
    phone:mixed().required("Completa el campo Telefono"),
    email: string().email().required("El formato de email es incorrecto"),
  });
  
  // parse and assert validity
  const validateForm = async(dataForm) => {

    try{
      await userSchema.validate(dataForm)
      return {status: "succes"}
    }catch (error) {
        return {status: "error", message: error.message}

    }

    

}
  
  //type User = InferType<typeof userSchema>;
  /* {
    name: string;
    age: number;
    email?: string | undefined
    website?: string | null | undefined
    createdOn: Date
  }*/

// exports
export default validateForm