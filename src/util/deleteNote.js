import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { useDispatch } from 'react-redux';
import { getNotes } from '@/store/features/noteAction';

const mySwal = withReactContent(Swal);

const handleDeleteNote = async (id) => {
    const result = await mySwal.fire({
        text: 'Are you sure yo want to delete?',
        showDenyButton: true,
        showConfirmButton: true,
        confirmButtonText: "Delete",
        denyButtonText: "Cancel",
        confirmButtonColor: "red",
        denyButtonColor: "#5FE26C",
    })
    if (result.isConfirmed) {
        await fetch(`http://localhost:3000/api/notes/${id}`, {
            method: 'DELETE'
        })
    }
}


export default handleDeleteNote;