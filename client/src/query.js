import React, { Component } from 'react'
import './App.css'

import ApolloClient, { gql } from 'apollo-boost'
import { ApolloProvider, Query, QueryResult } from 'react-apollo'

import { HelloWorldQuery } from '../__generated__/graphql-types'

const client = new ApolloClient({ uri: 'http://localhost:4000' })

const GET_HELLO = gql`
  query HelloWorldQuery {
    hell
  }
`
