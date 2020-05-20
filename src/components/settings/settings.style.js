import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';

const styleSettings = makeStyles((theme: Theme) =>
  createStyles({
    settingsWrapper: {
      width: '100%',
      display: "flex"
    },
    left: {
      maxWidth: 300,
      flex: 300,
      marginRight: 30,
      alignSelf : 'flex-start'
    },
    right: {
      flex: 1,
      padding: "20px 30px 30px"
    },
    link : {
      color : "black",
      textDecoration : "none"
    }
  }),
);

export default styleSettings;