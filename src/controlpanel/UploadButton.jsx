import React from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
        margin: theme.spacing(1)
    },
    input: {
        display: 'none',
    },
}));

export default function UploadButton() {
    const classes = useStyles();

    const uploadFile = (e) => {
        e.preventDefault();
        let file = this.state.fileToBeSent;
        const formData = new FormData();
      
        formData.append("file", file);
      
        axios
          .post("/upload", formData)
          .then(res => console.log(res))
          .catch(err => console.warn(err));
    }

    return (
        <div className={classes.root}>
            <input
                accept="image/*"
                className={classes.input}
                id="contained-button-file"
                multiple
                type="file"
            />
            <label htmlFor="contained-button-file">
                <Button variant="contained"
                    style={{
                        backgroundColor: "#f44336",
                    }}
                    onClick={uploadFile}
                    color="primary"
                    component="span">
                    Upload
                </Button>
            </label>
        </div>
    );
}
