import React, { useState } from 'react'
import { Avatar, Button, Paper, Grid, Typography, Container } from '@material-ui/core'
import useStyles from './Style';
import Input from './Input';
import Icon from './Icon';
import { useDispatch } from 'react-redux';
import { AUTH } from '../../constants/actionTypes';
import { signup, signin } from '../../actions/auth'


import { GoogleLogin } from 'react-google-login'
import { NavLink, useHistory } from 'react-router-dom'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

const initialState = {
    username: '',
    email: '',
    password: '',
    confirmPassword: ''

}

const Signup = () => {
   
    const [showPassword, setShowPassword] = useState(false);
    const [isSignup, setIsSignup] = useState(false);
    const [formData, setFormData] = useState(initialState);
    const classes = useStyles();
    const dispatch = useDispatch()
    const history = useHistory()

    const handleShowPassword = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword)
    }



    const handleSubmit = (e) => {
        // Axios here
        e.preventDefault()
        console.log(formData)
        if(isSignup) {
            dispatch(signup(formData, history))
        } else {
            dispatch(signin(formData, history))
        }

    }

    const handleChange = (e) => {

        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const switchMode = () => {
        setIsSignup((prevIsSignup) => !prevIsSignup);
        handleShowPassword(false)
    }

    const googleSuccess = async (res) => {
        const result = res?.profileObj;
        const token = res?.tokenId;

        try {
            dispatch({ type: AUTH, data: { result, token } });
            history.push('/')
        } catch (error) {
            console.log(error)
        }

        console.log(res)
    }
    const googleFailure = (error) => {
        console.log(error);
        console.log('Google sign in was unsuccessful')
    }

    return (
        <div>
       
        <Container component="main" maxWidth="xs">
            <Paper className={classes.paper} elevation={3}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">{ isSignup ? 'Sign up' : 'Sign in'}</Typography>

                <form className={classes.form} onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        {isSignup && (
                            <>
                                <Input name='username' handleChange={handleChange} label='User Name' autoFocus half />
                            </>
                        )}
                        <Input name='email' label='Email Address' handleChange={handleChange} type='email' />
                        <Input name='password' label='Password' handleChange={handleChange} type={showPassword ? 'text' : "password"} handleShowPassword={handleShowPassword} />
                        {isSignup && <Input name='confirmPassword' label='Repeat Password' handleChange={handleChange} type='password' />}
                    </Grid>
                    <Button type='submit' fullWidth varient='contained' color='primary' className={classes.submit}>
                        {isSignup ? 'Sign Up' : "Sign In"}
                    </Button>
           
                    <GoogleLogin 
                        clientId='176000713176-nuslq6vnk8tej0oe30hlie8ctb0k65vi.apps.googleusercontent.com'
                        render={(renderProps) => (
                            <Button 
                                className={classes.googleButton}
                                color='primary'
                                fullWidth 
                                onClick={renderProps.onClick}
                                disabled={renderProps.disabled}
                                startIcon={
                                <Icon />
                                }   
                               >
                               Google Sign In
                               </Button>  
                        )}
                        onSuccess={googleSuccess}
                        onFailure={googleFailure}
                        cookiePolicy='single_host_origin'
                    />
           
                    <Grid container justify={'flex-end'}>
                        <Grid item>
                            <Button onClick={switchMode}>
                                { isSignup ? 'Already have an account?' : 'Don\'t have an account?' }
                            </Button>

                        </Grid>
                    </Grid>


                </form>
            </Paper>
        </Container>
        </div>
    )
}

export default Signup;