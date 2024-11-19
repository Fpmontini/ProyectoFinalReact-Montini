

import { object, string, number, date, InferType } from 'yup';

let userSchema = object({
    fullname: string().required(),
    phone:mixed().required(),
    email: string().email().required(),
  });
  
  // parse and assert validity
  const validateForm = async(dataForm) => {

    try{
      await userSchema.validate(dataForm)
      return {status: "succes"}
    }catch (error) {
        return {status: "error", message}

    }

    

}
  
  type User = InferType<typeof userSchema>;
  /* {
    name: string;
    age: number;
    email?: string | undefined
    website?: string | null | undefined
    createdOn: Date
  }*/

// exports
export default validateForm