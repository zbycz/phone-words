import * as React from 'react';

export interface IPhoneInputProps {
    value: string;
    onValueChange(e: any);
}

export class PhoneInput extends React.Component<IPhoneInputProps> {
    public render() {
        return (
            <input
                type="text"
                className="form-control"
                placeholder="Enter number..."
                onChange={this.props.onValueChange}
                value={this.props.value}
            />
        );
    }
}
