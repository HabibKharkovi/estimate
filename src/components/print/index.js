import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { Page, Text, View, Document, StyleSheet, PDFDownloadLink, Image } from '@react-pdf/renderer';
 

const styles = StyleSheet.create({
    page: {
      padding: 30,
      paddingTop: 50,
      display: 'block',
      maxWidth: '900px',
      marginLeft: 'auto',
      marginRight: 'auto',
      backgroundColor: '#fff',
    },
    topSection: {
      display: 'flex',
      flexDirection : 'row',
      alignContent: 'space-between',
      marginBottom: 40,
    },
    topSectionBill: {
      display: 'flex',
      flexDirection : 'column',
    },
    topSectionService: {
      marginLeft: 'auto',
      display: 'flex',
      flexDirection : 'column',
      marginRight: 50,
    },
    subTitle: {
      fontSize: 20,
      fontWeight: "bold",
      marginBottom: 10,
    },
    mainTitleWrapper: {
      display: 'block',
      textAlign: 'center',
      marginBottom: 30,
    },
    mainTitle: {
      fontSize: 36,
      color: '#ddd',
      fontWeight: 'bold',
    },
    text: {
      fontSize: 16,
      fontWeight: '100'
    },
    secondSectionLeft: {
      display: 'flex',
      flexDirection : 'column',
    },
    secondSectionRight: {
      display: 'flex',
      flexDirection : 'column',
      marginLeft: 'auto'
    },
    secondSection: {
      display: 'flex',
      flexDirection : 'row',
      alignContent: 'space-between',
      marginBottom: 40,
    },
    secondSectionRow: {
      display: 'flex',
      flexDirection: 'row',
      width: 300,
      justifyContent: 'space-between',
      alignContent: 'space-between',
    },
    thirdSection: {
      display: 'flex',
      flexDirection : 'column',
      justifyContent: 'space-between',
      alignContent: 'space-between',
      marginBottom: 40,
    },
    thirdSectionRow: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignContent: 'space-between',
      padding: '6px 0',
      borderBottom: '1px solid #ddd'
    },
    thirdSectionHeadRow: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignContent: 'space-between',
      padding: '10px 0',
      borderBottom: '2px solid #ddd'
    },
    tableHead: {
      fontSize: 20,
      fontWeight: 'bold',
      width: 150,
      textAlign: 'right',
    },
    tableHeadDescription: {
      fontSize: 20,
      fontWeight: 'bold',
      flex: 1
    },
    tableCellDescription: {
      flex: 1
    },
    tableCell: {
      width: 150,
      textAlign: 'right',
    },
    forthSection : {
      display: 'flex',
      flexDirection : 'row',
      alignContent: 'space-between',
      marginBottom: 40,
    },
    forthSectionRight: {
      display: 'flex',
      flexDirection : 'column',
      marginLeft: 'auto',
      width: 300
    },
    forthSectionRow: {
      display: 'flex',
      flexDirection: 'row',
      width: 300,
      justifyContent: 'space-between',
      alignContent: 'space-between',
    }
  });
  
class PrintContent extends React.Component {
  render() {
    return (
          <Document >
            <Page size="A3" style={styles.page}>
                <View style={styles.mainTitleWrapper}>
                  <Text style={styles.mainTitle}>ESTIMATE</Text>
                </View>
                <View style={styles.topSection}>
                  <View style={styles.topSectionRight}>
                    <Image src="https://s3.amazonaws.com/joist-public/contractor-logo.png"/>
                  </View>
                  <View style={styles.topSectionService}>
                    <Text style={styles.subTitle}>Service Address</Text>
                    <Text style={styles.text}>address 1</Text>
                    <Text style={styles.text}>address 2</Text>
                    <Text style={styles.text}>city, state 3323</Text>
                  </View>
                  <View style={styles.topSectionBill}>
                    <Text style={styles.subTitle}>Bill To</Text>
                    <Text style={styles.text}>client name</Text>
                    <Text style={styles.text}>address 1</Text>
                    <Text style={styles.text}>address 2</Text>
                    <Text style={styles.text}>city, state 3323</Text>
                    <Text style={styles.text}>phone 1</Text>
                    <Text style={styles.text}>phone 2</Text>
                  </View>
                </View>
                <View style={styles.secondSection}>
                  <View style={styles.secondSectionLeft}>
                    <Text style={styles.subTitle}>Acme co.</Text>
                    <Text>name</Text>
                    <Text>city, state 3323</Text>
                    <Text>Phone: </Text>
                    <Text>Email: </Text>
                    <Text>Fax: </Text>
                    <Text>Web: </Text>
                  </View>
                  <View style={styles.secondSectionRight}>
                    <View style={styles.secondSectionRow}>
                      <Text style={styles.label}>Estimate #</Text>
                      <Text style={styles.value}>2345</Text>
                    </View>
                    <View style={styles.secondSectionRow}>
                      <Text style={styles.label}>Date</Text>
                      <Text style={styles.value}>2345</Text>
                    </View>
                    <View style={styles.secondSectionRow}>
                      <Text style={styles.label}>PO #</Text>
                      <Text style={styles.value}>2345</Text>
                    </View>
                    <View style={styles.secondSectionRow}>
                      <Text style={styles.label}>Business/Tax #</Text>
                      <Text style={styles.value}>2345</Text>
                    </View>
                  </View>
                </View>
                <View style={styles.thirdSection}>
                  <View style={styles.thirdSectionHeadRow}>
                    <Text style={styles.tableHeadDescription}>Description</Text>
                    <Text style={styles.tableHead}>Quantity</Text>
                    <Text style={styles.tableHead}>Rate</Text>
                    <Text style={styles.tableHead}>Total</Text>
                  </View>
                  <View style={styles.thirdSectionRow}>
                    <Text style={styles.tableCellDescription}>Date</Text>
                    <Text style={styles.tableCell}>Date</Text>
                    <Text style={styles.tableCell}>Date</Text>
                    <Text style={styles.tableCell}>Date</Text>
                  </View>
                  <View style={styles.thirdSectionRow}>
                    <Text style={styles.tableCellDescription}>Date</Text>
                    <Text style={styles.tableCell}>Date</Text>
                    <Text style={styles.tableCell}>Date</Text>
                    <Text style={styles.tableCell}>Date</Text>
                  </View>
                  <View style={styles.thirdSectionRow}>
                    <Text style={styles.tableCellDescription}>Date</Text>
                    <Text style={styles.tableCell}>Date</Text>
                    <Text style={styles.tableCell}>Date</Text>
                    <Text style={styles.tableCell}>Date</Text>
                  </View>
                </View>
                <View style={styles.forthSection}>
                  <View style={styles.forthSectionRight}>
                    <View style={styles.forthSectionRow}>
                      <Text style={styles.label}>Subtotal</Text>
                      <Text style={styles.value}>2345</Text>
                    </View>
                    <View style={styles.forthSectionRow}>
                      <Text style={styles.label}>Discount</Text>
                      <Text style={styles.value}>2345</Text>
                    </View>
                    <View style={styles.forthSectionRow}>
                      <Text style={styles.label}>Total</Text>
                      <Text style={styles.value}>2345</Text>
                    </View>
                    <View style={styles.forthSectionRow}>
                      <Text style={styles.label}>Deposit Due</Text>
                      <Text style={styles.value}>2345</Text>
                    </View>
                  </View>
                </View>
            </Page>
        </Document>
    );
  }
}
 
const Print = () => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
 
  return (
    <Paper elevation={3} className='print-page'>
      <div>
        <PrintContent ref={componentRef} />
      </div>
      <div className='btn-wrapper'>
        <Button variant="contained" color="primary" onClick={handlePrint}>Print</Button>
        <Button variant="contained" color="primary">
          <PDFDownloadLink document={<PrintContent />} fileName="somename.pdf">
            {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download')}
          </PDFDownloadLink>
        </Button>
      </div>
    </Paper>
  );
};

export default Print;