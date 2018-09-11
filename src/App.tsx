import * as React from 'react';
import * as ReactDOM from 'react-dom';

const App = () => {
    console.log('render'); // tslint:disable-line:no-console
    return (
        <div className="container pt-3">
            <div className="card-deck mb-3 text-center">
                <div className="card mb-4 box-shadow">
                    <div className="card-header">
                        <h4 className="my-0 font-weight-normal">Phone words generator</h4>
                    </div>
                    <div className="card-body">
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="Enter number..." aria-label="Enter number..." aria-describedby="button-addon2" />
                            <div className="input-group-append">
                                <button className="btn btn-outline-primary" type="button" id="button-addon2">Generate words</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;

ReactDOM.render(<App />, document.getElementById('app'));
