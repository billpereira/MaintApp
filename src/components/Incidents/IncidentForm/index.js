import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    // justifyContent: 'space-between'
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
  button: {
    justifyContent: 'flex-start',

    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  }
}));



export default function IncidentForm({complexes}) {
  console.log(complexes)

  const classes = useStyles();
  const [values, setValues] = React.useState({
    name: 'Cat in the Hat',
    age: '',
    multiline: 'Controlled',
    currency: 'SLT0',
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  return (
    <form className={classes.container} noValidate autoComplete="off">
      <TextField
        id="problem-abstract"
        label="Problem Abstract"
        placeholder="Problem Abstract"
        // className={classes.textField}
        fullWidth
        margin="normal"
      />
      <TextField
        id="problem-number"
        label="Problem #"
        placeholder="Problem Number"
        className={classes.textField}
        margin="normal"
      />
      <TextField
        id="name"
        label="Name"
        placeholder="Name"
        className={classes.textField}
        margin="normal"
      />
      <TextField
        id="date"
        label="Date"
        placeholder="Date"
        className={classes.textField}
        margin="normal"
      />
      <TextField
        id="select-complex"
        select
        label="Complex"
        className={classes.textField}
        value={values.currency}
        onChange={handleChange('currency')}
        SelectProps={{
          MenuProps: {
            className: classes.menu,
          },
        }}
        margin="normal"
      >
        {complexes.map(option => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        id="actions-taken"
        label="Actions Taken"
        multiline
        rows="4"
        fullWidth
        // defaultValue="Default Value"
        // className={classes.textField}
        margin="normal"
      />
      <TextField
        id="aditional-notes"
        label="Aditional Notes"
        multiline
        rows="4"
        fullWidth
        // defaultValue="Default Value"
        // className={classes.textField}
        margin="normal"
      />
      <Button variant="outlined" className={classes.button}>
        Cancel
      </Button>
      <Button variant="contained" color="primary" className={classes.button}>
        Submit
      </Button>
    </form>
  );
}