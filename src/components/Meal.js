import React, { Component } from 'react'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
//MUI COMPONENTS AND STYLES
import withStyles from '@material-ui/core/styles/withStyles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Link } from '@material-ui/core'


const styles = {
    card:{
        display:'flex',
        marginBottom: 20
    },
    image:{
        minWidth:200
    },
    content:{
        padding:20,
        objectFit:'cover'
    }

}

class Meal extends Component {
    render() {
        dayjs.extend(relativeTime)
        const { classes,meal:{ name,createdAt,userImage,userHandle,mealId,likeCount,commentCount } } = this.props
        return (
            <Card className = {classes.card}>
                <CardMedia className = {classes.image}
                image = {userImage}
                title = 'Profile image' />
                <CardContent className = {classes.content}>
                    <Typography variant = 'h5' component = {Link} to = {`/users/${userHandle}`}>
                        {userHandle}
                    </Typography>
                    <Typography variant = 'body2' color = 'textSecondary'>
                        {dayjs(createdAt).fromNow()}
                    </Typography>
                    <Typography variant = 'body1'>
                        {name}
                    </Typography>
                </CardContent>
            </Card>
        )
    }
}

export default withStyles(styles)(Meal)
