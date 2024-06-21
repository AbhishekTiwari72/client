export interface SignupFormValues {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword:string;
    phoneNumber: string; // Include phoneNumber in SignupFormValues

  }
  
  export interface LoginFormValues {
    email: string;
    password: string;
  }
  