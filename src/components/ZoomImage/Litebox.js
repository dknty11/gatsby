import React from 'react';
import ModalImage from 'react-modal-image';

const Litebox = (props) => (
	<ModalImage small={props.small} large={props.large} alt="" hideDownload={true} hideZoom={true} />
);

export default Litebox;
