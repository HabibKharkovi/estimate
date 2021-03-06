
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
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

export default useStyles;