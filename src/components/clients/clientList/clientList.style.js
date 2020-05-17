
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';

const styleClientList = makeStyles((theme: Theme) =>
  createStyles({
    clientListWrapper: {
        boxShadow: "none",
        border: "none"
    }
  }),
);

export default styleClientList;