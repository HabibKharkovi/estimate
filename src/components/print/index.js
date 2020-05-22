import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { Page, Text, View, Document, StyleSheet, PDFDownloadLink, Image } from '@react-pdf/renderer';
 

const styles = StyleSheet.create({
    page: {
      flexDirection: 'row',
    },
    section: {
      margin: 10,
      padding: 10,
      flexGrow: 1
    },
    middle : {
      display : 'flex',
      flexDirection : 'column'
    },
    contentWrapper : {
      display : 'flex',
    },
    image: {
        width: 200,
        height: 200
    }
  });
  
class PrintContent extends React.Component {
  render() {
    return (
        
          <Document >
            <Page size="A4" style={styles.page}>
              <Image
                      style={styles.image}
                      src="logo192.png"
                  />
              <View style={styles.section}>
                <View style={styles.middle}>
                  <Text>Service Address</Text>
                  <Text>Service address 1</Text>
                  <Text>Service address 2</Text>
                  <View className={styles.contentWrapper}>
                    <Text>city</Text>
                    <Text>state,</Text>
                    <Text>zip code</Text>
                  </View>
              </View>
              </View>
              <View style={styles.section}>
                  <Text>Bill To</Text>
                  <View  className={styles.contentWrapper}>
                    <Text>address 1</Text>
                    <Text>address 2</Text>
                  </View>
                  <View  className={styles.contentWrapper}>
                    <Text>new York,</Text>
                    <Text>new York</Text>
                  </View>
                  <View  className={styles.contentWrapper}>
                    <Text>state,</Text>
                    <Text>zip code</Text>
                  </View>
                  <View  className={styles.contentWrapper}>
                    <Text>phone no</Text>
                    <Text>phone no</Text>
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
    <Paper elevation={3}>
      <PrintContent ref={componentRef} />
      <div className='btn-wrapper'>
        <Button variant="contained" color="primary" onClick={handlePrint}>Print this out!</Button>
        <Button variant="contained" color="primary">
          <PDFDownloadLink document={<PrintContent />} fileName="somename.pdf">
            {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download now!')}
          </PDFDownloadLink>
        </Button>
      </div>
    </Paper>
  );
};

export default Print;