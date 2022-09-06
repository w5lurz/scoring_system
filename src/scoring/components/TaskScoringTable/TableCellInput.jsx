import { Typography } from '@mui/material';
import CheckboxWithValue from './inputs/CheckboxWithValue/CheckboxWithValue';
import NumberField from './inputs/NumberField/NumberField';
import SelectList from './inputs/SelectList/SelectList';

export default function TableCellInput({ taskIndex, aspectIndex, type = 'number' }) {
    if (type === 'list') {
        return <SelectList taskIndex={taskIndex} aspectIndex={aspectIndex} />;
    }
    if (type === 'number') {
        return <NumberField taskIndex={taskIndex} aspectIndex={aspectIndex} />;
    }
    if (type === 'boolean') {
        return <CheckboxWithValue taskIndex={taskIndex} aspectIndex={aspectIndex} />;
    }
    return (
        <Typography color="error" variant="h6">
            Input type {type} not handled yet...
        </Typography>
    );
}
