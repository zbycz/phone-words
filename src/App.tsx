import * as React from 'react';
import * as ReactDOM from 'react-dom';

const App = () => {
    console.log('render'); // tslint:disable-line:no-console
    return (
        <div>
            <p>React here!</p>
        </div>
    );
};

export default App;

ReactDOM.render(<App />, document.getElementById('app'));
