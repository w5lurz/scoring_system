import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper, Typography, Box, Alert, AlertTitle } from '@mui/material';
import TableCellInput from './TableCellInput';

const renderTableHeaderCell = (text) => <Typography variant="body1">{text}</Typography>;

export default function TaskScoringTable({ task, taskIndex }) {
    if (task.aspects && task.aspects.length > 0) {
        return (
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>{renderTableHeaderCell('#')}</TableCell>
                            <TableCell>{renderTableHeaderCell('Szempont megnevezése')}</TableCell>
                            <TableCell align="center">{renderTableHeaderCell('Elért pontszám / Maximális pontszám')}</TableCell>
                            <TableCell align="center">{renderTableHeaderCell('Szempont leírása')}</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {task.aspects.map((aspect, index) => (
                            <TableRow
                                key={aspect.id}
                                id={`tablerow-${aspect.id}`}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {index + 1}
                                </TableCell>
                                <TableCell>{aspect.name}</TableCell>
                                <TableCell align="center">
                                    <TableCellInput taskIndex={taskIndex} aspectIndex={index} type={aspect.type} />
                                </TableCell>
                                <TableCell align="center">{aspect.description || ''}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        );
    }
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Alert severity="info" sx={{ mt: '1rem', width: '50%' }}>
                <AlertTitle>Info</AlertTitle>
                Nincsenek szempontok ehhez a feladathoz!
            </Alert>
        </Box>
    );
}
