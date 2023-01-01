import { Dialog } from "@mui/material";
import QRCode from "react-qr-code";

export interface SimpleDialogProps {
    open: boolean;
    onClose: () => void;
    itemKey: string;
}

const QRDialog = ({open, onClose, itemKey} : SimpleDialogProps) => {
    return (
    <Dialog onClose={onClose} open={open}>
        <QRCode
            size={256}
            style={{ height: "auto", maxWidth: "100%", width: "100%" }}
            value={itemKey}
            viewBox={`0 0 256 256`}
        />
    </Dialog>)
}

export default QRDialog;