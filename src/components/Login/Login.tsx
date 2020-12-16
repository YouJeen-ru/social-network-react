import React from 'react';
import { Field, reduxForm } from 'redux-form'
import {Input} from "../common/FormControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../Redux/auth-reducer";
import { Redirect } from 'react-router-dom';
import styles from '../common/FormControls/FormsControls.module.css'




const LoginForm = (props: any) => {
    return (
        <>
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field
                        placeholder={'Login'} name={'email'} component={Input}
                        validate={[required]}
                    />
                </div>
                <div>
                    <Field placeholder={'Password'} name={'password'} type='password' component={Input}
                           validate={[required]}
                    />
                </div>
                <div>
                    <Field component={Input} name={'rememberMe'} type={'checkbox'}/> Remember me
                </div>
                {
                    props.error && <div className={styles.formSummaryError}>{props.error}</div>
                }
                <div>
                    <button>Login</button>
                </div>
            </form>
        </>
    );
};


const LoginReduxForm =  reduxForm({form: 'login'})(LoginForm)

const Login = (props: any) => {

    const onSubmit = (formData: any) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }

    return (
        <>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </>
    );
};

const mapStateToProps = (state: any) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login}) (Login);