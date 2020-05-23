import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import AddEstimate from './addEstimate';
import EstimateFilter from './estimateFilter';

export default function Estimates(){

    const [newEstimate, setNewEstimate] = useState(false);

    const handleNewEstimate = () => {
        setNewEstimate(true)
    }

    return (
        <div>
            {
                newEstimate ?
                <AddEstimate/>
                :
                <Paper elevator={3}>
                    <EstimateFilter handleNewEstimate={handleNewEstimate}/>
                </Paper>
            }
        </div>
    )
}