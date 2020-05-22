import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        row: {
            display: 'flex',
            marginBottom: 15,
            paddingBottom: 17, 
            borderBottom: '2px solid #ddd'
        },
        colHalf: {
            maxWidth: '50%',
            flex: '50%', 
        },
        label: {
            fontWeight: 'bold',
            display: 'inline-block',
            marginRight: 15,
            fontSize: 18,
        },
        value: {
            fontSize: 18,
        }
    })

)

export default useStyles;