
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';

const styleClientList = makeStyles((theme: Theme) =>
  createStyles({
    clientListWrapper: {
        boxShadow: "none",
        border: "none"
    },
    btnGroup : {
      display: "flex",
      padding: "10px 0",
      justifyContent: "flex-end",
    },
    button : {
      marginRight: 15
    }
  }),
);

export default styleClientList;