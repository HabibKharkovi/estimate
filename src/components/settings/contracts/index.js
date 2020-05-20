import React from 'react';
import styleContracts from './contracts.style';
import Switch from '@material-ui/core/Switch';
import Btn from '../../../utilies/button';


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
                        color="secondary"
                    />
                 </div>
                 <div className={classes.wrapper}>
                     <p className={classes.text}>Set as default invoice contract</p>
                     <Switch
                        checked={state.checkedB}
                        onChange={handleChange}
                        name="checkedB"
                        color="secondary"
                    />
                 </div>
             </div>
             <div>
                 <h3 className={classes.title}>Generic Contract</h3>
                 <p>By signing this document, the customer agrees to the services and conditions outlined in this document.</p>
             </div>
             <div className='btn-wrapper'>
                <Btn>
                    New Contract
                </Btn>
                <Btn>
                    Cancel
                </Btn>
                <Btn>
                    Save
                </Btn>
             </div>
        </div>
    )
}

export default Contracts;