import React from 'react';

import { PrinterThermalService } from './PrinterThermalService';

const PrinterComponent = ({  }) => {
  function doTestPrint() {    
    PrinterThermalService.doPrint();
  }

  return (
    <button     
     type="submit"      
     onClick={() => { doTestPrint() }} > Test Print</button>

)

}
export default PrinterComponent
