import * as React from 'react';
// import * as React from 'react';
import Box from '@mui/material/Box';

import Modal from '@mui/material/Modal';



function Modals({
    open,
    setOpen,
    title, 
    setTitle,
    addData
}) {

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 500,
        height: 150,
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 5
        
    };

    const handleClose = () => setOpen(false);


  return (
    <div>
        
        <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                <input
                        placeholder='Add the Title'
                        className='add-input'  onChange={(event) => setTitle(event.target.value)}
                        value={title}
                    />
                <div className='button-container'>
                        <button
                            className='add-docs' onClick={addData}
                        >
                            Add
                        </button>
                    </div>
                </Box>
            </Modal>


    </div>
  )
}

export default Modals