import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const stylePreferences = makeStyles((theme: Theme) =>
createStyles({
    switchContent : {
        display : 'flex',
        justifyContent : 'space-between',
        alignItems : 'center',
        borderBottom : '1px solid #b8b2b2'
    },
    btnGroup: {
        marginTop: 20,
    },
    marginBottom: {
        marginBottom: 30,
    },
    mr: {
        marginRight: 20
    }
}),
);

export default stylePreferences;