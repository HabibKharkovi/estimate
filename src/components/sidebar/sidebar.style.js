import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/grey';

const drawerWidth = 240;
const lightGrey = grey[50]; // #fafafa
const darkGrey = grey[900]; // #212121

const StyleSidebar = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    hide: {
      display: 'none',
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: 'nowrap',
    },
    paper: {
        backgroundColor: darkGrey,
        marginTop: 64,
    },
    manuLink : {
        color: lightGrey,
    },
    link : {
        textDecoration: "none",
    },
    icon: {
        width: 20
    },
    client : {
      width : 27
    },
    manuItem: {
        paddingTop: 15,
        paddingBottom: 15,
        borderTop: `1px solid #616161`
    },
    arrow: {
        color: lightGrey,
    },
    drawerOpen: {
      width: drawerWidth,
    },
    drawerClose: {
      [theme.breakpoints.up('sm')]: {
        width: 60,
      },
      overflowX: 'hidden',
      width: theme.spacing(7) + 1,
    },
    toolbar: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
    },
  }),
);

export default StyleSidebar;