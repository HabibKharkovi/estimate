import React from 'react';
import styleContracts from './contracts.style';
import Switch from '@material-ui/core/Switch';
import Button from '@material-ui/core/Button';


function Contracts(){
    const classes = styleContracts();
    const [state, setState] = React.useState({
        checkedA: true,
        checkedB: true,
      });
    
      const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setState({ ...state, [event.target.name]: event.target.checked });
      };
    return (
        <div>
             <h3 className="form-sub-heading">Contracts</h3>
             <div>
                 <h3 className={classes.title}>Edit Contract</h3>
                 <div className={classes.wrapper}>
                     <p className={classes.text}>Set as default estimate contract</p>
                     <Switch
                        checked={state.checkedA}
                        onChange={handleChange}
                        name="checkedA"
                        color="primary"
                    />
                 </div>
                 <div className={classes.wrapper}>
                     <p className={classes.text}>Set as default invoice contract</p>
                     <Switch
                        checked={state.checkedB}
                        onChange={handleChange}
                        name="checkedB"
                        color="primary"
                    />
                 </div>
             </div>
             <div className={classes.btnGroup}>
                <Button color="primary" variant="contained" size="large" className={classes.mr}>
                    Cancel
                </Button>
                <Button color="primary" variant="contained" size="large">
                    Save
                </Button>
            </div>
        </div>
    )
}

export default Contracts;