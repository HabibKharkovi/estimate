import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import InvoiceFilter from './invoiceFilter';
import AddEstimateAndInvoice from '../estimateAndInvoice/addEstimateAndInvoice';
import Print from '../print';

export default function Invoices(){
    const [newInvoice, setNewInvoice] = useState(false);
    const [invoicePage] = useState(true);

    const handleNewInvoice = () => {
        setNewInvoice(true)
    }

    return (
        <div>
            {
                newInvoice ?
                <AddEstimateAndInvoice/>
                :
                <Paper elevator={3}>
                    <InvoiceFilter handleNewInvoice={handleNewInvoice}/>
                </Paper>
                
            }
        </div>
    )
}