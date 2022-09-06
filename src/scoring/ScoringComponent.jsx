import { Box, Tabs, Tab, CssBaseline, Toolbar, Alert, AlertTitle } from '@mui/material';
import Header from './components/Header/Header';
import TabHeader from './components/TabHeader/TabHeader';
import TabPanel from './components/TabPanel/TabPanel';
import ErrorsDialog from './components/errors/ErrorsDialog';
import TaskScoringTable from './components/TaskScoringTable/TaskScoringTable';
import ButtonGroup from './components/ButtonGroup/ButtonGroup';
import { a11yProps } from './components/util/utilFunctions';
import useGetScoringComponentData from './hooks/useGetScoringComponentData';

export default function ScoringComponent({ criteria: inputData, onSubmit, onCancel }) {
    const { state, dispatch, StoreProvider, activeTab, setActiveTab, isErrorsDialogOpen, setIsErrorsDialogOpen, handleOnTabChange } =
        useGetScoringComponentData(inputData);
    const { criteria, results, errors } = state;

    const renderInnerContent = () => {
        if (criteria.tasks.length === 0) {
            return (
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Alert severity="info" sx={{ mt: '1rem', width: '50%' }}>
                        <AlertTitle>Info</AlertTitle>
                        Nincsenek feladatok!
                    </Alert>
                </Box>
            );
        }
        return (
            <>
                <Box sx={{ borderBottom: 1, borderColor: 'divider', mx: '2rem', mt: '1rem' }}>
                    <Tabs value={activeTab} variant="fullWidth" onChange={handleOnTabChange}>
                        {criteria.tasks.map((task, index) => {
                            return <Tab key={`${task.name}-${index}`} label={<TabHeader task={task} />} {...a11yProps(index)} />;
                        })}
                    </Tabs>
                </Box>
                {criteria.tasks.map((task, index) => {
                    return (
                        <TabPanel key={`${task.name}-${index}`} value={activeTab} index={index}>
                            <TaskScoringTable task={task} taskIndex={index} />
                        </TabPanel>
                    );
                })}
                <ButtonGroup
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                    onCancel={() => onCancel({ results: results.results })}
                    onSubmit={() => onSubmit({ results: results.results })}
                    state={state}
                />
            </>
        );
    };

    return (
        <StoreProvider value={{ state, dispatch }}>
            <CssBaseline>
                <Header results={results} errors={errors} setIsErrorsDialogOpen={setIsErrorsDialogOpen} />
                <Toolbar />
                <ErrorsDialog isOpen={isErrorsDialogOpen} setIsOpen={setIsErrorsDialogOpen} setActiveTab={setActiveTab} errors={errors} />
                {renderInnerContent()}
            </CssBaseline>
        </StoreProvider>
    );
}
