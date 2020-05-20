import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const styleEmail = makeStyles((theme: Theme) =>
createStyles({
    inputWrapper : {
        display : 'flex',
        justifyContent : 'space-between',
        alignItems : 'center',
        marginBottom : 20,
        maxWidth : '20%',
        flex : '20%'
    },
    inputText : {
        marginTop : 0,
        marginBottom : 0
    },
}),
);

export default styleEmail;