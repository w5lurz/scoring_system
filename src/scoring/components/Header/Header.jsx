import { Alert, AppBar, Box, Toolbar, Typography } from '@mui/material';
import CircularProgressWithLabel from '../util/LinearProgressWithLabel';

export default function Header({ results, errors, setIsErrorsDialogOpen }) {
    const calculateProgressValue = () => (results.resultsCount / results.allResultsCount) * 100;
    const calculateSumPoints = () => results.results.reduce((sum, result) => sum + result.value, 0);

    return (
        <AppBar position="absolute">
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Box sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', gap: 2 }}>
                    <Typography variant="h6" component="div">
                        Pontozó rendszer
                    </Typography>
                    <Typography variant="body1" component="div">
                        Összes pont: {calculateSumPoints()} / {results.maximumPoints}
                    </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    {Object.keys(errors).length !== 0 && (
                        <Alert
                            severity="error"
                            variant="filled"
                            onClick={() => {
                                setIsErrorsDialogOpen(true);
                            }}
                            sx={{ cursor: 'pointer' }}
                        >
                            Kitöltetlen kötelező mezőid vannak! Kattints ide, hogy megnézhesd őket.
                        </Alert>
                    )}
                    {results.allResultsCount !== 0 && <CircularProgressWithLabel value={calculateProgressValue()} />}
                </Box>
            </Toolbar>
        </AppBar>
    );
}
