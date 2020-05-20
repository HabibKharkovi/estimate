import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const styleCompany = makeStyles((theme: Theme) =>
createStyles({
    inputWrapper : {
        display : 'flex'
    },
    rightInput : {
        width : "calc(50% - 10px)",
        marginRight : 10
    },
    leftInput : {
        width : "calc(50% - 10px)",
        marginLeft : 10
    }
  
}),
);

export default styleCompany;