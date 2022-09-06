import { Box, Button } from '@mui/material';

export default function ButtonGroup({ activeTab, setActiveTab, onCancel, onSubmit, state }) {
    const { criteria, errors } = state;
    return (
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mx: '2rem' }}>
            <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}>
                <Button onClick={() => setActiveTab(activeTab - 1)} disabled={activeTab === 0}>
                    Előző
                </Button>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
                <Button onClick={() => onCancel({ todo: 'cancel' })}>Mégsem</Button>
                <Button onClick={() => onSubmit({ todo: 'submit' })} disabled={Object.keys(errors).length !== 0}>
                    Küldés
                </Button>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Button onClick={() => setActiveTab(activeTab + 1)} disabled={activeTab === criteria.tasks.length - 1}>
                    Következő
                </Button>
            </Box>
        </Box>
    );
}
