import React from 'react';
import { Field, reduxForm } from 'redux-form'
import {Input} from "../common/FormControls/FormsControls";
import {required} from "../../utils/validators/validators";


const LoginForm = (props: any) => {
    return (
        <>
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field
                        placeholder={'Login'} name={'login'} component={Input}
                        validate={[required]}
                    />
                </div>
                <div>
                    <Field placeholder={'Password'} name={'password'} component={Input}
                           validate={[required]}
                    />
                </div>
                <div>
                    <Field component={Input} name={'rememberMe'} type={'checkbox'}/> Remember me
                </div>
                <div>
                    <button>Login</button>
                </div>
            </form>
        </>
    );
};


const LoginReduxForm =  reduxForm({form: 'login'})(LoginForm)

const Login = () => {

    const onSubmit = (formData: any) => {
        console.log(formData)
    }


    return (
        <>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </>
    );
};

export default Login;