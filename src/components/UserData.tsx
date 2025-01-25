import { FC } from 'react';
import { saveAs } from 'file-saver';
import { pdf } from '@react-pdf/renderer';

import { styled } from '@mui/material/styles';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { Action, User } from '../interfaces/user';
import PdfDocument from '../utils/PdfDocument'

interface ExtraProps {
  handleEdit: (email: string) => void;
  dispatch: React.Dispatch<Action>;
}

const UserData: FC<User & ExtraProps> = ({
  email,
  name,
  role,
  handleEdit,
  dispatch
}) => {

    const downloadPdf = async () => {
        const fileName = 'User Activity Summary.pdf';
        const blob = await pdf(<PdfDocument name={name} email={email} role={role}/>).toBlob();
        saveAs(blob, fileName);
    };

    return (
        <TableRow key={name}>
            <TableCell align="center">{email}</TableCell>
            <TableCell align="center">{name}</TableCell>
            <TableCell align="center">{role}</TableCell>
            <TableCell align="center">
                <IconButton aria-label="edit" onClick={() => handleEdit(email)} color="primary">
                    <EditIcon />
                </IconButton>
                <IconButton aria-label="delete" color="error" onClick={() => {
                    dispatch({
                        type: 'DELETE_USER',
                        payload: { email }
                    });
                }}>
                    <DeleteIcon />
                </IconButton>
                <IconButton onClick={downloadPdf}>
                    <CloudUploadIcon />
                </IconButton>
            </TableCell>
        </TableRow>
    );
};

export default UserData;
