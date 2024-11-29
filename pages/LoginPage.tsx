import {Input, InputLabel, Button, DialogContentText, FormHelperText} from "@mui/material";
import React, {useState} from "react";
import {LoginFormContainer} from "./styles";

interface FormData {
    email: string;
    password: string;
}

interface ErrorState {
    errorEmail: string;
    errorPassword: string;
}


const LoginPage = () => {

    const [formState, setFormState] = useState<FormData>({email: "", password: ""});
    const [error, setError] = useState<ErrorState>({errorEmail: "", errorPassword: ""});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setFormState({...formState, [name]: value});
        setError({errorEmail: "", errorPassword: ""});
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if(validate()){
            console.log(JSON.stringify(formState));
            setFormState({email: "", password: ""});
        }
    }

    const validate = () => {
        let isValid = true;
        const errorState : ErrorState = {errorEmail: "", errorPassword: ""};

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if(!formState.email){
            errorState.errorEmail = "Поле не должно быть пустым.";
            isValid = false;
        } else if(!emailRegex.test(formState.email)) {
            errorState.errorEmail = "Некорректная почта.";
            isValid = false;
        }

        if(!formState.password){
            errorState.errorPassword = "Поле не должно быть пустым.";
            isValid = false;
        } else if(formState.password.length < 6){
            errorState.errorPassword = "Пароль не меньше 6 символов!";
            isValid = false;
        }

        setError(errorState)
        return isValid;
    }

    return (
        <LoginFormContainer>
            <form onSubmit={handleSubmit}>

                <InputLabel> Почта: </InputLabel>
                <Input name="email" onInput={handleChange} value={formState.email} placeholder="Электронная почта" />
                <FormHelperText>
                    {error.errorEmail}
                </FormHelperText>

                <InputLabel> Пароль: </InputLabel>
                <Input type="password" name="password" onInput={handleChange} value={formState.password} placeholder="Пароль" />
                <FormHelperText>
                    {error.errorPassword}
                </FormHelperText>

                <Button type="submit" >Войти</Button>
            </form>
            <DialogContentText>
                Почта: {formState.email}
            </DialogContentText>
            <DialogContentText>
                Пароль: {formState.password}
            </DialogContentText>
        </LoginFormContainer>
    );
}

export default LoginPage;