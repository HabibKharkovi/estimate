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
        },
        itemName: {
            fontSize: 18,
            display: 'inline-block',
            fontWeight: 'bold',
        },
        itemValue: {
            fontSize: 18,
            display: 'inline-block',
            marginLeft: 30
        },
        list: {
            margin: 0,
            marginTop: -10
        },
        listItem : {
            paddingBottom: 10,
            listStyle: 'decimal-leading-zero'
        }
    })

)

export default useStyles;