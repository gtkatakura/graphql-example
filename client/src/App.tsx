import React from 'react'
import './App.css'

import ApolloClient, { gql } from 'apollo-boost'
import { ApolloProvider, Query, QueryResult } from 'react-apollo'

import { HelloWorldQuery } from './__generated__/HelloWorldQuery'

const client = new ApolloClient({ uri: 'http://localhost:4000' })

const GET_HELLO = gql`
  query HelloWorldQuery {
    hello
  }
`

const App = () => (
  <ApolloProvider client={client}>
    <div className="App">
      <h1>
        <Query query={GET_HELLO}>
          {({ loading, error, data }: QueryResult<HelloWorldQuery>) => {
            if (loading) return 'Loading...'
            if (error) return 'Error :('

            return `Hello ${data && data.hello}`
          }}
        </Query>
      </h1>
    </div>
  </ApolloProvider>
)

export default App
