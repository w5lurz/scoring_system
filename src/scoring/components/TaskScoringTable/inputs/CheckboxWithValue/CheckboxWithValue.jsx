import { Checkbox, FormControl } from '@mui/material';
import useGetCheckboxWithValueData from './hooks/useGetCheckboxWithValueData';

export default function CheckboxWithValue({ taskIndex, aspectIndex }) {
    const { checked, handleCheckboxOnChange } = useGetCheckboxWithValueData(taskIndex, aspectIndex);
    return (
        <FormControl sx={{ m: 1 }}>
            <Checkbox id={`checkbox-${aspectIndex}`} checked={checked} onChange={handleCheckboxOnChange} />
        </FormControl>
    );
}
