import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import useConfig from 'hooks/useConfig';
import CardMedia from '@mui/material/CardMedia';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

 const CertificateModal = (props)  => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { borderRadius } = useConfig();
  return (
    <div>
      <Button onClick={handleOpen} variant="outlined">View Certificate</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <CardMedia component="img" image={props.memberCertificate} sx={{ borderRadius: `${borderRadius}px`, overflow: 'hidden', mb: 3 }} />
        </Box>
      </Modal>
    </div>
  );
}
export default CertificateModal;