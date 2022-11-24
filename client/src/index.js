import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter} from 'react-router-dom'
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Auth0Provider
            domain='dev-4c0hrnk5lhilc1ea.us.auth0.com'
            clientId='YLPUsRKbS3pVdhZBP3FTfo6BUaKzPMQv'
            redirectUri={window.location.origin}
            >
            <App />
        </Auth0Provider>
    </BrowserRouter>
                // domain={process.env.REACT_APP_AUTH0_DOMAIN}
                // clientId={process.env.REACT_APP_AUTH0_CLIENT_ID}
                // redirectUri={window.location.origin}
);
