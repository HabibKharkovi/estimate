import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';

const styleSettings = makeStyles((theme: Theme) =>
  createStyles({
    settingsWrapper: {
      width: '100%',
      display: "flex"
    },
    icon : {
      width : 21,
    },
    accountIcon : {
      width : 19
    },
    iconWrapper : {
      justifyContent : 'center'
    },
    restIcon : {
      width : 28,
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
    },
    text: {
      paddingLeft: 15,
    }
  }),
);

export default styleSettings;