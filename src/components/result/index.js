import React from 'react';
import clsx from 'clsx';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import useStyles from './result.style';

const TAX_RATE = 0.07;

function ccyFormat(num) {
    return `${num.toFixed(2)}`;
  }
  
  function priceRow(qty, unit) {
    return qty * unit;
  }
  
  function createRow(desc, qty, unit) {
    const price = priceRow(qty, unit);
    return { desc, qty, unit, price };
  }
  
  function subtotal(items) {
    return items.map(({ price }) => price).reduce((sum, i) => sum + i, 0);
  }
  
  const rows = [
    createRow('Paperclips (Box)', 100, 1.15),
    createRow('Paper (Case)', 10, 45.99),
    createRow('Waste Basket', 2, 17.99),
  ];
  
  const invoiceSubtotal = subtotal(rows);
  const invoiceTaxes = TAX_RATE * invoiceSubtotal;
  const invoiceTotal = invoiceTaxes + invoiceSubtotal;

  

export default function Result() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <h3 className="form-sub-heading">Estimate #4223</h3>
            <div>
                <div className={classes.row}>
                        <label className={classes.label}>Estimate #</label>
                        <span className={classes.value}>4223</span>
                </div>
                <div className={classes.row}>
                    <label className={classes.label}>Date</label>
                    <span className={classes.value}>05/26/2020</span>
                </div>
                <div className={classes.row}>
                    <label className={classes.label}>PO Number</label>
                    <span className={classes.value}>0000</span>
                </div>
            </div>
            <TableContainer>
                <Table className={classes.tableTop} aria-label="spanning table" size="small">
                    <TableBody>
                        <TableRow>
                            <TableCell>Subtotal</TableCell>
                            <TableCell align="right">$0.00</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Markup</TableCell>
                            <TableCell align="right">$0.00</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Discount</TableCell>
                            <TableCell align="right">$0.00</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Request a deposit</TableCell>
                            <TableCell align="right">$0.00</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Tax</TableCell>
                            <TableCell align="right">$0.00</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Total  (AUD)</TableCell>
                            <TableCell align="right">$0.00</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
            <h3 className="form-sub-heading">Client Information</h3>
            <div className={classes.clientinfo}>
                <div className={classes.row}>
                    <div className={clsx(classes.name, classes.colHalf)}>
                        <label className={classes.label}>Name</label>
                        <span className={classes.value}>client name</span>
                    </div>
                    <div className={clsx(classes.email, classes.colHalf)}>
                        <label className={classes.label}>Email</label>
                        <span className={classes.value}>email@gmail.com</span>
                    </div>
                </div>
                <div className={classes.row}>
                    <div className={clsx(classes.phone, classes.colHalf)}>
                        <label className={classes.label}>Phone (mobile)</label>
                        <span className={classes.value}>3323233444</span>
                    </div>
                    <div className={clsx(classes.phone, classes.colHalf)}>
                        <label className={classes.label}>Phone (other)</label>
                        <span className={classes.value}>4223233444</span>
                    </div>
                </div>
                <div className={classes.row}>
                    <div className={clsx(classes.phone, classes.colHalf)}>
                        <label className={classes.label}>City</label>
                        <span className={classes.value}>new york</span>
                    </div>
                    <div className={clsx(classes.phone, classes.colHalf)}>
                        <label className={classes.label}>Zip / Postal Code</label>
                        <span className={classes.value}>4433</span>
                    </div>
                </div>
                <div className={classes.row}>
                    <label className={classes.label}>State</label
                    ><span className={classes.value}>state</span>
                </div>
                <div className={classes.row}>
                    <label className={classes.label}>Address</label>
                    <span className={classes.value}>asdf asdf asdf</span>
                </div>
                <div className={classes.row}>
                    <label className={classes.label}>Address 2</label>
                    <span className={classes.value}>asdf asdf asdf</span>
                </div>
            </div>

            <h3 className="form-sub-heading">Items</h3>
            <TableContainer>
            <Table className={classes.table} aria-label="spanning table" size="small">
                <TableHead>
                <TableRow>
                    <TableCell className={classes.firstCell}>Description</TableCell>
                    <TableCell align="right" className={classes.tableCell}>Rate</TableCell>
                    <TableCell align="right" className={classes.tableCell}>Quantity</TableCell>
                    <TableCell align="right" className={classes.tableCell}>Tax</TableCell>
                    <TableCell align="right" className={classes.tableCell}>Total</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {rows.map((row) => (
                    <TableRow key={row.desc}>
                        <TableCell colSpan={5} className={classes.innerTableWrapper}>
                            <Table className={classes.innerTable} aria-label="spanning table" size="small">
                                <TableBody>
                                    <TableRow key={row.desc}>
                                        <TableCell className={classes.firstCell}>{row.desc}</TableCell>
                                        <TableCell align="right" className={classes.tableCell}>{row.qty}</TableCell>
                                        <TableCell align="right" className={classes.tableCell}>{row.unit}</TableCell>
                                        <TableCell align="right" className={classes.tableCell}>{row.qty}</TableCell>
                                        <TableCell align="right" className={classes.tableCell}>{row.unit}</TableCell>
                                    </TableRow>
                                    <TableRow key={row.desc}>
                                        <TableCell colSpan={5}>item description</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableCell>
                    </TableRow>
                ))}

                <TableRow>
                    <TableCell rowSpan={3} />
                    <TableCell colSpan={3}>Subtotal</TableCell>
                    <TableCell align="right">{ccyFormat(invoiceSubtotal)}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell colSpan={3}>Total</TableCell>
                    <TableCell align="right">{ccyFormat(invoiceTotal)}</TableCell>
                </TableRow>
                </TableBody>
            </Table>
            </TableContainer>
        </div>
    )
}