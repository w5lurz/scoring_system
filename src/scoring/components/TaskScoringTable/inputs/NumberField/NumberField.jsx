import { FormControl, TextField, Typography } from '@mui/material';
import useGetNumberFieldData from './hooks/useGetNumberFieldData';

export default function NumberField({ taskIndex, aspectIndex }) {
    const { value = '', maxValue, error = false, handleNumberFieldOnChange } = useGetNumberFieldData(taskIndex, aspectIndex);
    return (
        <>
            <FormControl sx={{ m: 1 }}>
                <TextField
                    id={`number-field-${aspectIndex}`}
                    type="number"
                    error={error}
                    InputProps={{ inputProps: { min: 0, max: maxValue } }}
                    size="small"
                    value={value}
                    onChange={handleNumberFieldOnChange}
                />
            </FormControl>
            {error && (
                <Typography variant="body2" color="error">
                    A mező kitöltése kötelező!
                </Typography>
            )}
        </>
    );
}
