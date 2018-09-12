import * as React from 'react';
import { PhoneInput } from './PhoneInput';

export interface IPhoneWordsFormState {
    phone: string;
}

export interface IPhoneWordsFormProps {
    onSubmit(phone: string);
}

export class PhoneWordsForm extends React.Component<IPhoneWordsFormProps, IPhoneWordsFormState> {

    constructor(props) {
        super(props);
        this.onPhoneChanged = this.onPhoneChanged.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = { phone: '' };
    }

    public render() {
        return (
            <form onSubmit={this.onSubmit}>
                <div className="input-group mb-3">
                    <PhoneInput onValueChange={this.onPhoneChanged} value={this.state.phone} />
                    <div className="input-group-append">
                        <button className="btn btn-outline-primary" type="submit">Generate words</button>
                    </div>
                </div>
            </form>
        );
    }

    private onPhoneChanged(e) {
        this.setState({ phone: e.target.value });
    }

    private onSubmit(e) {
        e.preventDefault();
        this.props.onSubmit(this.state.phone);
    }
}
