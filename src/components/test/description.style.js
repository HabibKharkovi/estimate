import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { clearAsyncError } from 'redux-form';

const styleDescription = makeStyles((theme: Theme) =>
createStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > *': {
            margin: theme.spacing(1),
        }
    },
    inputWrapper : {
        display : 'flex',
        alignItems : 'center',
        marginBottom: 20
    },
    fieldWrapper : {
        display : 'flex',
        alignItems : 'center',
        marginBottom: 20
    },
    innerWrapper : {
        flex : '80%',
        maxWidth : '80%'
    },
    input : {
        maxWidth : 'calc(80% -15px)',
        flex : '80%',
        marginRight : 15
    },
    left : {
        marginRight : 10,
        width : 'calc(49.3% - 10px)'
    },
    right : {
        marginLeft : 10,
        width : 'calc(49.3% - 10px)'
    },
    buttonWrapper : {
        maxWidth : 'calc(20% -15px)',
        flex : '20%',
        marginLeft : 15
    },
    pro : {
        backgroundColor : '#3838d3',
        color : '#fff',
        borderRadius : 5,
        fontSize : 16
    },
    signatureWrapper : {
        display : 'flex',
        border : "2px solid #d9cfcf",
        borderRadius : 5,
        padding : '10px 10px'
    },
    signatureContent : {
        marginTop : 0,
        marginBottom : 0
    },
    sign : {
        display : 'block',
        textAlign : 'center',
        fontSize : 14
    },
    leftSignature : {
        maxWidth : '50%',
        flex : '50%',
        borderRight : '1px solid #c0b3b3 ',
        padding : '0 15px 0 5px'
    },
    rightSignature : {
        maxWidth : '50%',
        flex : '50%',
        padding : '0 5px 0 15px'
    },
    innerContainer : {
        display : 'flex',
        alignItems : 'center',
        borderBottom : "2px solid #d9cfcf",
        padding : '5px 10px 40px 5px'
    }
}),
);

export default styleDescription;