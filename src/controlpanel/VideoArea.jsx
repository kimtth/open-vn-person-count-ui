import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';


const useStyles = makeStyles({
    root: {
        maxWidth: '95%'
    },
    media: {
        width: "auto",
        maxHeight: "340px",
    },
});

export default function VideoArea() {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardMedia
                className={classes.media}
                component="img"
                //image="https://images.unsplash.com/photo-1531954137720-75fb9230c307?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b496827218e70e7c066d2e6bbf25de26&auto=format&fit=crop&w=600&q=60"
                image="/crowd-people.jpg"
                title="video"
            />
        </Card>
    );
}
