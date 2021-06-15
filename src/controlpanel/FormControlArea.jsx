import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import UploadButton from './UploadButton';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    card: {
        margin: theme.spacing(2)
    },
    formControl: {
        margin: theme.spacing(2),
    },
}));

export default function FormControlArea() {
    const classes = useStyles();
    const [model, setModel] = React.useState('people');
    const [srcType, setSrcType] = React.useState('cam');

    const handleModelChange = (event) => {
        setModel(event.target.value);
    };

    const handleSrcTypeChange = (event) => {
        setSrcType(event.target.value);
    };

    return (
        <>
            <div className={classes.root}>
                <FormControl component="fieldset" className={classes.formControl}>
                    <FormLabel component="legend">Crowd Counting Model</FormLabel>
                    <FormGroup>
                        <RadioGroup aria-label="model_select" name="model_select" value={model} onChange={handleModelChange}>
                            <FormControlLabel value="people" control={<Radio />} label="People Detection (Intel)" />
                            <FormControlLabel value="csrnet" control={<Radio />} label="CSRNet" />
                        </RadioGroup>
                    </FormGroup>
                    <FormHelperText>Please select detection mode.</FormHelperText>
                </FormControl>
            </div>
            <div className={classes.root}>
                <FormControl component="fieldset" className={classes.formControl}>
                    <FormLabel component="legend">Target Source</FormLabel>
                    <FormGroup>
                        <RadioGroup aria-label="model_select" name="model_select" value={srcType} onChange={handleSrcTypeChange}>
                            <FormControlLabel value="cam" control={<Radio />} label="Cam (Realtime)" />
                            <FormControlLabel value="mov" control={<Radio />} label="Video file" />
                        </RadioGroup>
                    </FormGroup>
                    {
                        srcType === 'mov' ? <UploadButton></UploadButton> : ''
                    }
                </FormControl>
            </div>
            <div className={classes.root}>
                <Button className={classes.card} variant="contained" color="primary" component="span">Detect</Button>
                <Button className={classes.card} variant="contained" component="span">Clear</Button>
            </div>
        </>
    );
}
