import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    taxWrapper: {
      width: '100%',
      display: "flex"
    }
  }),
);

export default useStyles;