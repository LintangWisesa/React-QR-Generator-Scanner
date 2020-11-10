import {IconButton} from '@material-ui/core'
import {ArrowBack} from '@material-ui/icons'
import { Link } from "react-router-dom";

function QRscanner() {
    return (
      <div>
            <Link to="/">
            <IconButton fontSize="large" color="secondary">
                <ArrowBack fontSize="inherit" />
            </IconButton>
            </Link>
            QR scanner
      </div>
    );
  }
  
  export default QRscanner;
  