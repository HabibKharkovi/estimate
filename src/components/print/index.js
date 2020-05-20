import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
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
            <View style={styles.section}>
                <Text>Section #1 asdf asdf</Text>
                <Text>Section #2</Text>
            </View>
            <Image
                    style={styles.image}
                    src="logo192.png"
                />
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
    <div>
        <div style={{"display": "none"}}>

      <PrintContent ref={componentRef} />
        </div>
      <button onClick={handlePrint}>Print this out!</button>
      <PDFDownloadLink document={<PrintContent />} fileName="somename.pdf">
        {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download now!')}
      </PDFDownloadLink>
    </div>
  );
};

export default Print;