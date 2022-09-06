import ScoringComponent from './scoring/ScoringComponent';
import json_data from './stories/example-data/the-example';

function App() {
    return (
        <ScoringComponent criteria={json_data} onSubmit={(results) => console.log(results)} onCancel={(results) => console.log(results)} />
    );
}

export default App;
