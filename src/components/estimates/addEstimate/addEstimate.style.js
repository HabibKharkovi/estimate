import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

const styleAddEstimate = makeStyles((theme) => ({
    root: {
      width: '100%',
    },
    backButton: {
      marginRight: theme.spacing(1),
    },
    instructions: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
  }));


export default styleAddEstimate;