const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type MenuItem {
    name: String!
    description: String
    price: Float!
  }

  type Category {
    name: String!
    items: [MenuItem!]!
  }

  type Query {
    categories: [Category!]!
    menuItems(category: String): [MenuItem!]!
    menu: [Category!]!  # Add this field to query the full menu
  }
`;

module.exports = typeDefs;
