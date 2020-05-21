import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        row: {
            display: 'flex',
            marginBottom: 15,
        },
        colHalf: {
            maxWidth: '50%',
            flex: '50%', 
        },
        label: {
            fontWeight: 'bold',
            display: 'inline-block',
            marginRight: 15
        },
        innerTableWrapper: {
            padding: "0 !important",
            
        },
        innerTable: {
            border: "1px solid #ddd",
            borderRadius: 8,
            marginBottom: 15,
        },
        firstCell: {
            width: "35%",
        },
        tableCell: {
            width: "15%"
        }
    })

)

export default useStyles;