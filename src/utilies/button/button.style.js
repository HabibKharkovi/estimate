import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const styleButton = makeStyles((theme: Theme) =>
createStyles({
    root: {
        '& > *': {
          margin: theme.spacing(1),
        },
      },
}),
);

export default styleButton;