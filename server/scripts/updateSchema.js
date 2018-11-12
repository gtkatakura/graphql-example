import fs from 'fs'
import path from 'path'
import { schema } from '../src/schema'
import { graphql } from 'graphql'
import { introspectionQuery, printSchema } from 'graphql/utilities'

(async () => {
  const result = await graphql(schema, introspectionQuery)

  if (result.errors) {
    console.error(
      'ERROR introspecting schema: ',
      JSON.stringify(result.errors, null, 2),
    )
  } else {
    fs.writeFileSync(
      path.join(__dirname, '../__generated__/schema.json'),
      JSON.stringify(result, null, 2),
    )

    process.exit(0)
  }
})()

fs.writeFileSync(
  path.join(__dirname, '../__generated__/schema.graphql'),
  printSchema(schema),
)
