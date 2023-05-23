




const escpos = require('escpos');   // import lib escpos            
 // create usb adapter        

export const PrinterThermalService = {
    doPrint() {          

      console.log('IPC ESCPOS STARTING --------');
      try {  
       
        escpos.USB = require('escpos-usb');
        console.log(escpos.USB.findPrinter());   // for see list of printer        
        
        
        // // register idVendor & idProduct Printer    
        // //const device = new escpos.USB(4070, 33054); // Printer VSC TM 801
        // const device = new escpos.USB(2501,22750); // Printer C58BT
        // const printer = new escpos.Printer(device); // initialize printer       

          
        // let qrUrl = 'https://github.com/denitiawan'; // url

       
         
       
        // // templating
        // device.open(() => {      
            
        //     // print text
        //     printer.align('lt').text('');
        //     printer.align('ct').text('Test Printing');
        //     printer.align('ct').text('Electron React Boilerplate');
        //     printer.align('lt').text('');
    
        //     printer.align('ct').text('By Deni Setiawan');
        //     printer.align('ct').text('NexSOFT');                
        //     printer.align('lt').text('');
    
        //     printer.align('ct').text('Feature Support : ');
        //     printer.align('ct').text('Printout Text');
        //     printer.align('ct').text('Printout Barcode (CODE39)');
        //     printer.align('ct').text('Printout QR Code');
        //     printer.align('ct').text('Cut Papper');
        //     printer.align('ct').text('Open Cash Drawer');                
        //     printer.align('lt').text('');       
            
        //     // print barcode
        //     printer.align('ct').barcode('CODE39', 'CODE39'); 
        //     printer.align('ct').text('');
            
        //     // print qrcode
        //     printer.align('ct').text('Scan Me').style('B');
        //     printer.align("ct").qrimage(qrUrl, function (err) { 
        //       printer.align('ct').text(qrUrl);  
        //       printer.align('ct').text('');
        //       printer.align('ct').text('');
        //       printer.cut(); 
        //       printer.close(); 
        //     });
            
        //     // print action
        //     printer.cut(); 
        //     printer.cashdraw(2); 
        //     printer.close();     
        //   });   
          
          
       
         }
         catch (error) {    
          console.log(error);
        }    

    },
  };
  