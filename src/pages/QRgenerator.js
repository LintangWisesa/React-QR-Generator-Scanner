import React, {useState} from 'react'
import {Fab, TextField} from '@material-ui/core'
import {ArrowBack, GetApp} from '@material-ui/icons'
import { Link } from "react-router-dom";
import QRcode from 'qrcode.react'

function QRgenerator() {
    const [qr, setQr] = useState('lintangwisesa');
    const handleChange = (event) => {
        setQr(event.target.value);
    };
    const downloadQR = () => {
        const canvas = document.getElementById("myqr");
        const pngUrl = canvas
          .toDataURL("image/png")
          .replace("image/png", "image/octet-stream");
        let downloadLink = document.createElement("a");
        downloadLink.href = pngUrl;
        downloadLink.download = "myqr.png";
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
    };

    return (
      <div>
            <Link to="/">
            <Fab style={{marginRight:10}} color="primary">
                <ArrowBack/>
            </Fab>
            </Link>
            <span>QR Generator</span>
            
            <div style={{marginTop:50}}>
                <TextField onChange={handleChange}
                value={qr} label="QR content" size="large" variant="outlined" color="primary" 
                />
            </div>

            <div style={{marginTop:50}}>
                {
                    qr ?
                    <QRcode 
                        id="myqr"
                        value={qr} 
                        size={320}
                    /> :
                    <p>No QR code preview</p>
                }
            </div>
            <div>
                {
                    qr ? 
                    <span>
                        <p>
                            {qr}
                            <Fab onClick={downloadQR} style={{marginLeft:10}} color="primary">
                                <GetApp/>
                            </Fab>
                        </p>
                    </span> :
                    ''
                }
            </div>
      </div>
    );
  }
  
  export default QRgenerator;
  