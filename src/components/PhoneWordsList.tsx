import * as React from 'react';

export interface IPhoneWordsListProps {
    list: string[];
}

export class PhoneWordsList extends React.Component<IPhoneWordsListProps> {
    public render() {
        const list = this.props.list;
        const columnStyle = list.length ? { columns: `${list[0].length}em` } : {};

        return (
            <ul className="list-unstyled mt-3 mb-4" style={columnStyle}>
                {list.map((item, idx) => (<li key={idx}>{item}</li>))}
            </ul>
        );
    }
}
