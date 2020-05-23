import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import MaterialTable from 'material-table';
import VisibilityIcon from '@material-ui/icons/Visibility';
import Button from '@material-ui/core/Button';
import useStyles from './estimate.style';


function a11yProps(index) {
  return {
    id: `wrapped-tab-${index}`,
    'aria-controls': `wrapped-tabpanel-${index}`,
  };
}

export default function EstimateFilter({ handleNewEstimate }) {

  const classes = useStyles();
  const [value, setValue] = React.useState('one');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.tabHeader}>
        <Tabs value={value} onChange={handleChange} aria-label="wrapped label tabs example">
          <Tab
            className={classes.tab}
            value="one"
            label="PENDING"
            wrapped
            {...a11yProps('one')}
          />
          <Tab className={classes.tab} value="two" label="APPROVED" {...a11yProps('two')} />
          <Tab className={classes.tab} value="three" label="DECLINED" {...a11yProps('three')} />
        </Tabs>
        <Button 
        className={classes.newEstimateBtn} 
        color="primary" variant="contained" 
        onClick={() => handleNewEstimate()}
        size="large">
        New Estimate
        </Button>
      </AppBar>

      <MaterialTable
        title=""
        columns={[
            { title: 'Estimate No.', field: 'no' },
            { title: 'Client Name', field: 'client_name' },
            { title: 'Date', field: 'date' },
            { title: 'Status', field: 'status' },
            { title: 'Total', field: 'total' },
        ]}
        data={[
            { no: '#456', client_name: 'client name', date: '05/03/2020', status: 'pending', total: 342 },
        ]}
        options={{
            actionsColumnIndex: -1
        }}
        actions={[
            {
              icon: '',
            }
          ]}
        components={{
            Action: props => (
              <div className={classes.btnGroup}>
                <Button
                    color="primary"
                    className={classes.btn}
                    variant="contained"
                    style={{textTransform: 'none'}}
                    size="small"
                    >
                    Open
                </Button>
                <Button
                    className={classes.btn}
                    color="primary"
                    variant="contained"
                    style={{textTransform: 'none'}}
                    size="small"
                    >
                    Edit
                </Button>
              </div>
            ),
          }}
        />


    </div>
  );
}