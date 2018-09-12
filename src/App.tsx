import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { PhoneWordsContainer } from './components/PhoneWordsContainer';

const App = () => {
    return (
        <div className="container pt-3">
            <div className="card-deck mb-3 text-center">
                <div className="card mb-4 box-shadow">
                    <div className="card-header">
                        <h4 className="my-0 font-weight-normal">Phone words generator</h4>
                    </div>
                    <div className="card-body">
                        <PhoneWordsContainer />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;

ReactDOM.render(<App />, document.getElementById('app'));
