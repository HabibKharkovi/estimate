import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';

const styleItems = makeStyles((theme: Theme) =>
  createStyles({
    itemsWrapper: {
      width: '100%',
      display: "flex"
    },
    left: {
      width: "40%",
      marginRight: 30,
      alignSelf: "flex-start",
      position: 'relative',
    },
    right: {
      flex: 1,
    },
    primaryPadding: {
      padding: "20px 30px 30px",
    },
    newItem: {
      position: 'absolute',
      zIndex: 99,
      top: 14,
      left: 150
    },
    texWrapper: {
      marginTop: 30,
    }
  }),
);

export default styleItems;