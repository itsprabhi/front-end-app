import React, { Component } from 'react';
import axios from 'axios'


//MUI COMPONENTS
import Grid from '@material-ui/core/Grid';

//COMPONENTS
import Meal from '../components/Meal';
import Profile from '../components/Profile'


export class home extends Component {
    state = {
        meals: null
    }

    componentDidMount(){
        axios.get('/meals')
        .then(res => {
            console.log(res.data)
            this.setState({
                meals:res.data
            })
        })
        .catch(err => console.log(err))
    }

    render() {
        let recentMealMarkup = this.state.meals ? (
        this.state.meals.map(meal => <Meal key = {meal.mealId} meal = {meal} />)
        ) : <p>Loading...</p>
        return (
            <Grid container>
                <Grid item sm = {8} xs = {12}>
                    <p>{recentMealMarkup}</p>
                </Grid>
                <Grid item sm = {4} xs = {12}>
                    <Profile />
                </Grid>
            </Grid>
        )
    }
}

export default home
