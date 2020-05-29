import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const styleAccount = makeStyles((theme: Theme) =>
createStyles({
  formText : {
      fontWeight : "lighter",
      marginTop : 0,
      marginBottom : 0
  },
  btnWrapper : {
    margin : "20px 0"
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

export default styleAccount;