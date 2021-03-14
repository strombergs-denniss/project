import Router from '../Router/Router.component'
import { Provider } from 'react-redux'
import './App.scss'
import Store from '../Store/Store.component'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'

function App() {
    const client = new ApolloClient({
        uri: 'http://localhost:3001/graphql',
        cache: new InMemoryCache(),
        fetchOptions: {
            mode: 'no-cors',
        }
    })

    return (
        <div className="App">
            <ApolloProvider client={ client }>
                <Provider store={ Store }>
                    <Router></Router>
                </Provider>
            </ApolloProvider>
        </div>
    );
}

export default App