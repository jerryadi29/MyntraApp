import React from 'react'
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function Bag(props) {

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  return (
    <>
    
      <Modal  open={props.modalOpen} onClose={props.handleClose}  >

          <Box sx={style}>
            <Typography>
              hii
            </Typography>
          </Box>


      </Modal>
    
    </>
  )
}
