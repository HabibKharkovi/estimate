import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { clearAsyncError } from 'redux-form';

const stylePayment = makeStyles((theme: Theme) =>
createStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > *': {
            margin: theme.spacing(1),
        }
    }
}),
);

export default stylePayment;