import { Button, Dialog, DialogActions, DialogContent, DialogTitle, List, ListItem, ListItemText } from '@mui/material';

export default function ErrorsDialog({ isOpen, setIsOpen, setActiveTab, errors }) {
    const renderErrorsList = () => {
        if (Object.keys(errors).length !== 0) {
            return (
                <List>
                    {Object.values(errors).map((error) => (
                        <ListItem
                            key={error.id}
                            sx={{
                                borderRadius: '10px',
                                cursor: 'pointer',
                                '&:hover': {
                                    backgroundColor: 'rgb(174, 202, 250)',
                                },
                            }}
                            onClick={() => {
                                setActiveTab(error.taskIndex);
                                setIsOpen(false);
                            }}
                        >
                            <ListItemText primary={error.taskName} secondary={error.aspectName} />
                        </ListItem>
                    ))}
                </List>
            );
        }
        return null;
    };

    return (
        <Dialog open={isOpen} maxWidth="sm" fullWidth>
            <DialogTitle>Mezők</DialogTitle>
            <DialogContent>{renderErrorsList()}</DialogContent>
            <DialogActions>
                <Button
                    onClick={() => {
                        setIsOpen(false);
                    }}
                >
                    Bezár
                </Button>
            </DialogActions>
        </Dialog>
    );
}
