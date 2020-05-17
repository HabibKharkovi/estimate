import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';

const styleClients = makeStyles((theme: Theme) =>
  createStyles({
    clientsWrapper: {
      width: '100%',
      display: "flex"
    },
    left: {
      width: "40%",
      marginRight: 30,
      alignSelf: "flex-start",
    },
    right: {
      flex: 1,
      padding: "20px 30px 30px"
    }
  }),
);

export default styleClients;