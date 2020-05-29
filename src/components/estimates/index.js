import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import EstimateFilter from './estimateFilter';
import AddEstimateAndInvoice from '../estimateAndInvoice/addEstimateAndInvoice';

export default function Estimates(){

    const [newEstimate, setNewEstimate] = useState(false);

    const handleNewEstimate = () => {
        setNewEstimate(true)
    }

    return (
        <div>
            {
                newEstimate ?
                <AddEstimateAndInvoice/>
                :
                <Paper elevator={3}>
                    <EstimateFilter handleNewEstimate={handleNewEstimate}/>
                </Paper>
                
            }
        </div>
    )
}