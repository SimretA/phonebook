import * as React from 'react';

export interface ContactComponentProps {
    name: string;
    email: string;
}

export const Contact = (props: ContactComponentProps) =>{
    return (<div>
        <h1>{props.name}</h1>
        <p>{props.email}</p>
    </div>);
}