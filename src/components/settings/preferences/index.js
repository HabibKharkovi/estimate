import React,{useState} from 'react';
import stylePreferences from './preferences.style';
import Switch from '@material-ui/core/Switch';
import Btn from '../../../utilies/button';

function Preferences(){
    const classes = stylePreferences();
    const [state, setState] = React.useState({
        checkedA: true,
        checkedB: true,
        checkedC: true
      });
    
      const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setState({ ...state, [event.target.name]: event.target.checked });
      };
    return (
        <div>
            <div>
                <h3 className='form-sub-heading'>Email Estimate Message</h3>
                <p className='text'>We are excited about the possibility of working with you.</p>
            </div>
            <div>
                <h3 className='form-sub-heading'>Email Invoice Message</h3>
                <p className='text'>Thanks for your business!</p>
            </div>
            <div>
                <h3 className='form-sub-heading'>Notifications</h3>
                <p>Turn "On" to receive instant notifications when a client opens or signs your documents.</p>
            </div>
            <div className={classes.switchContent}>
                <p>Thanks for your business!</p>
                <Switch
                checked={state.checkedA}
                onChange={handleChange}
                name="checkedA"
                color="secondary"
                />
            </div>
            <div className={classes.switchContent}>
                <p>Email not delivered</p>
                <Switch
                checked={state.checkedB}
                onChange={handleChange}
                name="checkedB"
                color="secondary"
                />
            </div>
            <div className={classes.switchContent}>
                <p>Client signs document</p>
                <Switch
                checked={state.checkedC}
                onChange={handleChange}
                name="checkedC"
                color="secondary"
                />
            </div>
            <div className={classes.btnWrapper}>
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

export default Preferences;