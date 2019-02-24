const express = require('express');
const path = require('path');
const { StaticRouter } = require('react-router');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const { App } = require('./App');

const app = express();
const port = 8080;
const www = path.join(process.cwd(), 'dist');

app.use(express.static(www));
console.log(www);

const html = (app) => `
<!doctype html>
<html>
    <head>
        <title>SSR (SERVER)</title>
    </head>
    <body>
        <pre>Hello, from the server</pre>
        <div id="root">${app}</div>
        <script src="client.bundle.js"></script>
    </body> 
</html>
`;

app.get('/', (req, res) => {
    const app = <StaticRouter context={{}} location={req.uri}><App/></StaticRouter>;
    const rendered = html(ReactDOMServer.renderToString(app));

    console.log(rendered);
    res.write(rendered);
    res.end();
});

app.listen(port, () => {
    console.log(`listening on ${port}`);
});

