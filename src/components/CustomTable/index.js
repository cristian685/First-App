import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import Checkbox from '@mui/material/Checkbox';



export default function CustomTable(props) {
    const { onChange, list, checkIntervals } = props;

    const handleOnChange = row => () => {
        onChange(row)
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
                    {list.map((row) => {

                        const isDisabled = !!checkIntervals.find(item => item === row.value)

                        return (
                            <TableRow
                                key={row.label}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row" >
                                    {row.label}
                                </TableCell>
                                <TableCell align="right"  >{row.label}</TableCell>
                                <Checkbox
                                    checked={row.checked || isDisabled}
                                    onChange={handleOnChange(row)}
                                    disabled={isDisabled}
                                />
                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
