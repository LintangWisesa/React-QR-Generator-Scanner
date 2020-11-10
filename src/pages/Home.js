import {Grid, Button} from '@material-ui/core';
import Icon from '@mdi/react'
import { mdiQrcode, mdiQrcodeScan } from '@mdi/js';
import { Link } from "react-router-dom";

function Home() {

    return (
        <Grid container spacing={6}>
            <Grid item xs={6}>
                <Link to="/qr_generator">
                <Button variant="contained" size="large" color="primary">
                    <Icon 
                    style={{padding:10}}
                    path={mdiQrcode}
                    title="QR Generator"
                    size={10}
                    color="white"
                    />
                </Button>
                </Link>
            </Grid>
            <Grid item xs={6}>
                <Link to="/qr_scanner">
                <Button variant="contained" size="large" color="primary">
                    <Icon 
                    style={{padding:10}}
                    path={mdiQrcodeScan}
                    title="QR Scanner"
                    size={10}
                    color="white"
                    />
                </Button>
                </Link>
            </Grid>
        </Grid>
    );
  }
  
  export default Home;
  