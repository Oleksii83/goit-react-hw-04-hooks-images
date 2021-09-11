import { Component } from 'react';
import { createPortal } from 'react-dom';
import s from './Modal.module.css';
import PropTypes from 'prop-types';

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillMount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleBackdropClick = e => {
    console.log('click');
    if (e.target === e.currentTarget) {
      this.props.onClose();
    }
  };

  render() {
    const { url, onClose } = this.props;

    return createPortal(
      <div className={s.Overlay} onClick={onClose}>
        <div className={s.Modal}>
          <img src={url} alt="" />
          {this.props.children}
        </div>
      </div>,
      modalRoot,
    );
  }
}

Modal.propTypes = {
  url: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};
