import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const styleContracts = makeStyles((theme: Theme) =>
createStyles({
  title : {
      borderBottom : '1px solid #cabdbd',
      marginTop : 0,
      marginBottom :0,
      padding : '10px 0 15px 0'
  },
  text : {
    marginTop : 0,
    marginBottom :0,
  },
  wrapper : {
      display : 'flex',
      justifyContent : 'space-between',
      alignItems : 'center',
      padding : '15px 0',
      borderBottom : '1px solid #cabdbd',
  },
  contractBtn : {
    width : 150
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

export default styleContracts;