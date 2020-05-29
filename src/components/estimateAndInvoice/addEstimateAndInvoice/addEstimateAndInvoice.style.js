import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
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
    addEstimateAndInvoiceWrapper: {
      width: '100%',
      display: "flex",
      marginTop: 30,
    },
    left: {
      width: "calc(50% - 15px)",
      marginRight: 15,
    },
    right: {
      width: "calc(50% - 15px)",
      marginLeft: 15,
      padding: "20px 30px 30px"
    },
    estimatesForm: {
      padding: 20
    }
  }));


export default useStyles;