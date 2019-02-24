import React from 'react';

export class App extends React.Component {
    componentDidMount() {
        console.log('Mounted on the client');
    }

    render() {
        return <pre>Hello from React!</pre>;
    }
}

