import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    btnGroup: {
        display: 'flex',
    },
    btn: {
        marginRight: 13,
    },
    tabHeader: {
        flexDirection: 'row',
        backgroundColor: "#212121",
        height: 65,
        alignItems: "center"
    },
    newEstimateBtn: {
        marginLeft: 'auto',
        marginRight: 15
    },
    tab: {
        height: 65
    }
  }));


export default useStyles;