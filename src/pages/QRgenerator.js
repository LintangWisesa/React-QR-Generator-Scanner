import {IconButton} from '@material-ui/core'
import {ArrowBack} from '@material-ui/icons'
import { Link } from "react-router-dom";

function QRgenerator() {
    return (
      <div>
            <Link to="/">
            <IconButton fontSize="large" color="secondary">
                <ArrowBack fontSize="inherit" />
            </IconButton>
            </Link>
            QR generator
      </div>
    );
  }
  
  export default QRgenerator;
  