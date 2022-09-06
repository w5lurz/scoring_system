import { FormControl, Select, MenuItem, Typography } from '@mui/material';
import useGetSelectListData from './hooks/useGetSelectListData';

export default function SelectList({ taskIndex, aspectIndex }) {
    const { value, values, error, handleSelectListOnChange } = useGetSelectListData(taskIndex, aspectIndex);
    return (
        <>
            <FormControl sx={{ m: 1, minWidth: '8rem', textAlign: 'start' }}>
                <Select id={`select-${aspectIndex}`} value={value || ''} onChange={handleSelectListOnChange} size="small" error={error}>
                    {Object.entries(values).map(([key, value]) => {
                        return (
                            <MenuItem key={key} value={`${value}`}>
                                {key}
                            </MenuItem>
                        );
                    })}
                </Select>
            </FormControl>
            {error && (
                <Typography variant="body2" color="error">
                    A mező kitöltése kötelező!
                </Typography>
            )}
        </>
    );
}
