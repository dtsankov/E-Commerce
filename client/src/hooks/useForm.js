import { useState} from 'react';

export const useForm = (initialValues,initialErrors, onSubmitHandler) => {
    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState(initialErrors);

  

    const changeHandler = (e) => {
        setValues(state => ({...state, [e.target.name]: e.target.value}));
    };

    const validateEmailHandler = (e) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (values.email.length === 0) {
            setErrors(state => ({ ...state, [e.target.name]: 'Email is required' }));
            return false;
        }else if (!regex.test(values.email)) {
            setErrors(state => ({ ...state, [e.target.name]:'Invalid email address' }));
          return false;
        }
            setErrors(state => ({...state, [e.target.name]: ""}));
    }

    const validatePasswordHandler = (e) => {
        if (values.password.length === 0) {
            setErrors(state => ({ ...state, [e.target.name]: 'Password is required' }));
            return false;
        }else if (values.password.length < 6) {
            setErrors(state => ({ ...state, [e.target.name]: 'Password must be at least 6 characters' }));
            return false;
          }
          setErrors(state => ({...state, [e.target.name]: ""}));
    }

    const validateRePasswordHandler = (e) => {
        if (values.repassword.length === 0) {
            setErrors(state => ({ ...state, [e.target.name]: 'Password is required' }));
            return false;
        }else if (values.password !== values.repassword) {
            setErrors(state => ({ ...state, [e.target.name]: 'Password does not match' }));
            return false;
          }
          setErrors(state => ({...state, [e.target.name]: ""}));
    }

    const onSubmit = (e) => {
        e.preventDefault();

         
        onSubmitHandler(values, errors);
    };

    const changeValues = (newValues) => {
        // TODO: Validate newValues shape (like initialValues)
        
        setValues(newValues);
    };

    return {
        values,
        errors,
        changeHandler,
        validateEmailHandler,
        validatePasswordHandler,
        validateRePasswordHandler,
        onSubmit,
        changeValues,
    };
};


/* 
  
    
      const validatePassword = () => {
      
      };


    
    
        const isEmailValid = validateEmail();
        const isPasswordValid = validatePassword();
    
        if (isEmailValid && isPasswordValid) {
        try {
            
            const result = await authService.login(email, password);

            console.log(result);

            if (result && result._id) {
            
                userHandler(result)

                navigate('/profile');
            }
        } catch (error) {
            console.log(error);
        }
     
 */