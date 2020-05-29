import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const styleDocument = makeStyles((theme: Theme) =>
createStyles({
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

export default styleDocument;