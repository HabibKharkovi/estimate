import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';


const stylePayment = makeStyles((theme: Theme) =>
createStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > *': {
            margin: theme.spacing(1),
        }
    },
    wrapper: {
        display : 'flex',
        alignItems : 'center'
    },
    left: {
        maxWidth : "calc(80% - 10px)",
        flex : "80%",
        marginRight : 10
    },
    right: {
        maxWidth : "calc(20% - 10px)",
        flex : "20%",
        marginLeft : 10
    }
}),
);

export default stylePayment;