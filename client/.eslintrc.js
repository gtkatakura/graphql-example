module.exports = {
  "parser": "babel-eslint",
  "plugins": [
    "graphql"
  ],
  "rules": {
    "graphql/template-strings": ["error", {
      "env": "apollo",
      "schemaJson": require('./__generated__/schema.json'),
    }, {
      "env": "literal",
      "schemaJson": require('./__generated__/schema.json'),
    }],
  },
}
