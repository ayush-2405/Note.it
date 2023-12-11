import { MdDeleteForever } from 'react-icons/md';
import { FaEdit } from "react-icons/fa";

const Note = ({ id, text, date, handleDeleteNote }) => {
	return (
		<div className='note'>
			<span>{text}</span>
			<div className='note-footer'>
				<small>{date}</small>
				<div className='icons'>
					<FaEdit
						// onClick={()=> handleEditNote}
						className='edit-icon'
						size='1.3rem'/>
					<MdDeleteForever
						onClick={() => handleDeleteNote(id)}
						className='delete-icon'
						size='1.3em'
				/>
				</div>
			</div>
		</div>
	);
};

export default Note;
