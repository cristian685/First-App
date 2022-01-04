import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {useState} from "react";
import Checkbox from '@mui/material/Checkbox';

function createData(hour, reservation) {
    return { hour, reservation };
}
    const res="LIBER"




const rows = [
    createData('08:00', res),
    createData('09:00', res),
    createData('10:00', res),
    createData('11:00', res),
    createData('12:00', res),
    createData('13:00', res),
    createData('14:00', res),
    createData('15:00', res),
    createData('16:00', res),
    createData('17:00', res),
    createData('18:00', res),
    createData('19:00', res),
    createData('20:00', res),
    createData('21:00', res),
    createData('22:00', res),
    createData('23:00', res),
    createData('24:00', res),
];

export default function CustomTable() {
    const [selectCell, setSelectCell] = useState(false);
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

    const handleSelectCell = () => {
    setSelectCell(!selectCell)
    }
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 350 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Ora rezervarii</TableCell>
                        <TableCell align="right">Rezervare</TableCell>

                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (

                        <TableRow
                            selected={handleSelectCell}
                            key={row.hour}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row" >
                                {row.hour}
                            </TableCell>
                            <TableCell align="right"  >{row.reservation}</TableCell>
                            <Checkbox {...label} />
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}