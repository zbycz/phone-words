import * as React from 'react';
import { apiService } from '../services/apiService';
import { PhoneWordsForm } from './PhoneWordsForm';
import { PhoneWordsList } from './PhoneWordsList';

export interface IPhoneWordsContainerState {
    isLoading: boolean;
    list: string[];
    error: string;
}

export class PhoneWordsContainer extends React.Component<{}, IPhoneWordsContainerState> {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = { isLoading: false, list: [], error: null };
    }

    public render() {
        const { isLoading, list, error } = this.state;

        return (
            <div>
                <PhoneWordsForm onSubmit={this.onSubmit}/>
                {error ? <div className="alert alert-danger">{error}</div> : null}
                {isLoading ? 'Loading...' : <PhoneWordsList list={list}/>}
            </div>
        );
    }

    private onSubmit(phone) {
        if (!phone) {
            this.setState( { isLoading: false, error: 'Please add some numbers.' });
            return;
        }

        this.setState({ isLoading: true, error: null });

        apiService.getPhoneWords(phone).then((result) => {
            this.setState({
                isLoading: false,
                list: result.list
            });
        }, (err) => {
            this.setState({
                isLoading: false,
                list: [],
                error: err.message
            });
        });
    }
}
