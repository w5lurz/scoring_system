import { Box } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ErrorIcon from '@mui/icons-material/Error';

export default function TabHeader({ task }) {
    const { name, aspects } = task;
    const countErrors = aspects.filter((aspect) => aspect.error).length;
    const countFilledAspects = aspects.length - countErrors;
    return (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
            {`${name} (${countFilledAspects}/${aspects.length})`}
            {countFilledAspects === aspects.length ? (
                <CheckCircleIcon sx={{ ml: '4px' }} color="success" />
            ) : (
                <ErrorIcon sx={{ ml: '4px' }} color="error" />
            )}
        </Box>
    );
}
