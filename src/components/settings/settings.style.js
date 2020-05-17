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
    },
    right: {
      flex: 1,
      padding: "20px 30px 30px"
    }
  }),
);

export default styleSettings;