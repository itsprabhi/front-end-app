import React, { Component } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'

//MUI COMPONENTS
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress'

import { connect } from 'react-redux';
import {signupUser } from '../redux/actions/userAction'

const styles = {
    form:{
        textAlign:'center'
    },
    pageTitle:{
        fontSize:70,
    },
    costumError:{
        color:'red',
        fontSize:'0.8rem'
    },
    button:{
        position:'relative'
    },
    progress:{
        positon:'absolute'
    }
}


export class signup extends Component {
    constructor(){
        super()
        this.state = {
            email:'',
            password:'',
            confirmedPassword:'',
            userHandle:'',
            errors:{}
        }
    }
    
    componentWillReceiveProps(nextProps){
        if(nextProps.UI.errors){
            this.setState({ errors: nextProps.UI.errors })
        }
    }

    handleSubmit = (event) => {
        console.log(this.state)

        event.preventDefault();
        this.setState({
            loading:true
        })
        const newUserData = {
            email:this.state.email,
            password:this.state.password,
            confirmedPassword:this.state.confirmedPassword,
            userHandle:this.state.userHandle
        }
        this.props.signupUser(newUserData,this.props.history)
 
    }

    handleChange = event => {
        this.setState({
            [event.target.name]:event.target.value
        })
    }

    render() {
        const { classes, UI:{ loading } } = this.props
        const { errors } = this.state
        return (
            <div>
                <Grid container className = {classes.form}>
                <Grid item sm />
                    <Grid item sm>
                        <Typography variant = 'h1' className = {classes.pageTitle}>
                            signup
                        </Typography>
                        <form noValidate onSubmit = {this.handleSubmit}>

                            <TextField 
                            id = 'email' 
                            name = 'email' 
                            type = 'email' 
                            label = 'Email' 
                            className = {classes.textField}
                            helperText = {errors.email}
                            error = {errors.email ? true : false}
                            value = {this.state.email} 
                            onChange = {this.handleChange} 
                            fullWidth/>

                            <TextField 
                            id = 'password' 
                            name = 'password' 
                            type = 'password' 
                            label = 'Password' 
                            className = {classes.textField}
                            helperText = {errors.password}
                            error = {errors.password ? true : false}
                            value = {this.state.password} 
                            onChange = {this.handleChange} 
                            fullWidth/>

                            <TextField 
                            id = 'confirmedPassword' 
                            name = 'confirmedPassword' 
                            type = 'password' 
                            label = 'Confirmed Password' 
                            className = {classes.textField}
                            helperText = {errors.confirmedPassword}
                            error = {errors.confirmedPassword ? true : false}
                            value = {this.state.confirmedPassword} 
                            onChange = {this.handleChange} 
                            fullWidth/>

                            <TextField 
                            id = 'userHandle' 
                            name = 'userHandle' 
                            type = 'text' 
                            label = 'userHandle' 
                            className = {classes.textField}
                            helperText = {errors.userHandle}
                            error = {errors.userHandle ? true : false}
                            value = {this.state.userHandle} 
                            onChange = {this.handleChange} 
                            fullWidth/>

                            {errors.general && (
                                <Typography variant = 'body2' className = {classes.costumError}>
                                    {errors.general}
                                </Typography>
                            )}

                            <Button 
                            type = 'submit' 
                            varient = 'contained' 
                            color ='primary' 
                            className = {classes.button}
                            disabled = {loading}>
                                signup
                                {loading && (
                                    <CircularProgress className = {classes.progress} />
                                )}
                            </Button>
                            <br />

                            <Typography variant = 'body2'>
                                Not a member? <a href = '/signup'>Sign Up </a>
                            </Typography>

                        </form> 
                    </Grid>
                    <Grid item sm />
                </Grid>
            </div>
        )
    }
}

signup.propTypes = {
    classes: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired,
    UI: PropTypes.object.isRequired,
    logoutUser: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
    user: state.user,
    UI: state.UI
})

export default connect(mapStateToProps, { signupUser })(withStyles(styles)(signup))
