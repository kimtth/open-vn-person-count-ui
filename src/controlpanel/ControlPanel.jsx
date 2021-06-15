import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import FormControlArea from './FormControlArea'
import VideoArea from './VideoArea'
import { Alert } from '@material-ui/lab';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  container: {
    padding: theme.spacing(1),
    height: "450px",
    justify: "center",
    alignItems: "center"
  },
  item: {
    display: "flex",
    height: "450px",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10 
  },
  item2: {
    display: "block",
    height: "450px",
    justifyContent: "center",
    alignItems: "top",
    borderRadius: 10
  }
}));

export default function ControlPanel(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <Typography variant="h6" className={classes.title}>
            Open-Vino People Crowd Counter
          </Typography>
        </Toolbar>
      </AppBar>
      <Alert severity="success">
        Hi! There. Let's start to analyze.
      </Alert>
      <Box component={Grid} spacing={1} className={classes.container} container>
        <Box component={Grid} xs={9} item>
          <Box bgcolor="white" className={classes.item} boxShadow={2}>
            <VideoArea></VideoArea>
          </Box>
        </Box>
        <Box component={Grid} xs={3} item>
          <Box bgcolor="white" className={classes.item2} boxShadow={2}>
            <FormControlArea></FormControlArea>
          </Box>
        </Box>
      </Box>
    </div>
  );
}
