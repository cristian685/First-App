import * as React from 'react';
import { styled } from '@mui/system';
import TablePaginationUnstyled from '@mui/base/TablePaginationUnstyled';
import MediaCard from "../../views/Products/components/MediaCard";
import {daysInWeek, getDay, getMonth} from "date-fns";


function createData(hour, luni, marti , mierucuri, joi, vineri ,sambata, duminica) {
    return { hour, luni, marti , mierucuri, joi, vineri ,sambata, duminica};
}

const rows = [
    createData('08:00', "Liber", "Liber" ,"Liber" ,"Liber" ,"Liber"),
    createData('09:00', "Liber", "Liber" ,"Ocupat" ,"Ocupat","Ocupat","Ocupat","Ocupat"),
    createData('10:00', "Liber", "Liber"),
    createData('11:00', "Liber", "Liber"),
    createData('12:00', "Liber", "Ocupat"),
    createData('13:00', "Liber", "Ocupat"),
    createData('14:00', "Liber", "Ocupat"),
    createData('15:00', "Liber", 3.2),
    createData('16:00', "Liber", 9.0),
    createData('17:00', "Liber", 0.0),
    createData('18:00', "Liber", 26.0),
    createData('19:00', "Liber", 0.2),
    createData('20:00', "Liber", 0),
    createData('21:00', "Liber", 19.0),
    createData('22:00', 437, 18.0),
    createData('23:00', 360, 19.0),
    createData('24:00', 437, 18.0),
].sort((a, b) => (a.hour < b.hour ? -1 : 1));

const blue = {
    200: '#A5D8FF',
    400: '#3399FF',
};

const grey = {
    50: '#F3F6F9',
    100: '#E7EBF0',
    200: '#E0E3E7',
    300: '#CDD2D7',
    400: '#B2BAC2',
    500: '#A0AAB4',
    600: '#6F7E8C',
    700: '#3E5060',
    800: '#2D3843',
    900: '#1A2027',
};

const Root = styled('div')(
    ({ theme }) => `
  table {
    font-family: IBM Plex Sans, sans-serif;
    font-size: 0.875rem;
    border-collapse: collapse;
    width: 100%;
  }

  td,
  th {
    border: 1px solid ${theme.palette.mode === 'dark' ? grey[800] : grey[200]};
    text-align: left;
    padding: 6px;
  }

  th {
    background-color: ${theme.palette.mode === 'dark' ? grey[900] : grey[100]};
  }
  `,
);

const CustomTablePagination = styled(TablePaginationUnstyled)(
    ({ theme }) => `
  & .MuiTablePaginationUnstyled-spacer {
    display: none;
  }
  & .MuiTablePaginationUnstyled-toolbar {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;

    @media (min-width: 768px) {
      flex-direction: row;
      align-items: center;
    }
  }
  & .MuiTablePaginationUnstyled-selectLabel {
    margin: 0;
  }
  & .MuiTablePaginationUnstyled-select {
    padding: 2px;
    border: 1px solid ${theme.palette.mode === 'dark' ? grey[800] : grey[200]};
    border-radius: 50px;
    background-color: transparent;
    &:hover {
      background-color: ${theme.palette.mode === 'dark' ? grey[800] : grey[50]};
    }
    &:focus {
      outline: 1px solid ${theme.palette.mode === 'dark' ? blue[400] : blue[200]};
    }
  }
  & .MuiTablePaginationUnstyled-displayedRows {
    margin: 0;

    @media (min-width: 768px) {
      margin-left: auto;
    }
  }
  & .MuiTablePaginationUnstyled-actions {
    padding: 2px;
    border: 1px solid ${theme.palette.mode === 'dark' ? grey[800] : grey[200]};
    border-radius: 50px;
    text-align: center;
  }
  & .MuiTablePaginationUnstyled-actions > button {
    margin: 0 8px;
    border: transparent;
    border-radius: 2px;
    background-color: transparent;
    &:hover {
      background-color: ${theme.palette.mode === 'dark' ? grey[800] : grey[50]};
    }
    &:focus {
      outline: 1px solid ${theme.palette.mode === 'dark' ? blue[400] : blue[200]};
    }
  }
  `,
);

export default function CustomDataTable() {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(17);

    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows =
        page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth()+1}`
    return (
        <Root sx={{ width: 500, maxWidth: '100%' }}>
            <table aria-label="custom pagination table">

                <thead>
                    <tr>
                    <th>Ora</th>

                        <th>Luni {getDay(1)}/{getMonth(1)}</th>
                    <th>Marti</th>
                    <th>Miercuri</th>
                    <th>Joi</th>
                    <th>Vineri</th>
                    <th>Sambata</th>
                    <th>Duminica</th>


                </tr>
                </thead>
                <tbody>
                {(rowsPerPage > 0
                        ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                        : rows
                ).map((row) => (
                    <tr key={row.hour}>
                        <td>{row.hour}</td>
                        <td style={{ width: 120 }} align="right">
                            {row.luni}
                        </td>
                        <td style={{ width: 120 }} align="right">
                            {row.marti}
                        </td>
                        <td style={{ width: 120 }} align="right">
                            {row.mierucuri}
                        </td>
                        <td style={{ width: 120 }} align="right">
                            {row.joi}
                        </td>
                        <td style={{ width: 120 }} align="right">
                            {row.vineri}
                        </td>
                        <td style={{ width: 120 }} align="right">
                            {row.sambata}
                        </td>
                        <td style={{ width: 120 }} align="right">
                            {row.duminica}
                        </td>
                    </tr>
                ))}

                {emptyRows > 0 && (
                    <tr style={{ height: 41 * emptyRows }}>
                        <td colSpan={7} />
                    </tr>
                )}
                </tbody>
                <tfoot>
                <tr>
                    <CustomTablePagination
                        rowsPerPageOptions={[10, 17]}
                        colSpan={7}
                        count={rows.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        componentsProps={{
                            select: {
                                'aria-label': 'rows per page',
                            },
                            actions: {
                                showFirstButton: true,
                                showLastButton: true,
                            },
                        }}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                </tr>
                </tfoot>
            </table>
        </Root>
    );
}