import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import PropTypes from 'prop-types';
import Form from '../Form';

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 600,
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #000',
    boxShadow: theme.shadows[2],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function SimpleModal({
  open,
  handleClose,
  totalAmountDol,
  totalAmountEur,
}) {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <Form
        handleClose={handleClose}
        totalAmountDol={totalAmountDol}
        totalAmountEur={totalAmountEur}
      />
      <SimpleModal />
    </div>
  );

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      {body}
    </Modal>
  );
}
SimpleModal.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func,
  totalAmountEur: PropTypes.number,
  totalAmountDol: PropTypes.number,
};
SimpleModal.defaultProps = {
  totalAmountEur: 0,
  totalAmountDol: 0,
  handleClose: () => undefined,
};
