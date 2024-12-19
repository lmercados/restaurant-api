const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const typeDefs = require("./schema/menu.schema");
const resolvers = require("./resolvers/menu.resolver");

const startServer = async () => {
  const app = express();
  const server = new ApolloServer({ typeDefs, resolvers });

  await server.start();
  server.applyMiddleware({ app });

  const PORT = process.env.PORT || 4000;
  app.listen(PORT, () => console.log(`Server ready at http://localhost:${PORT}${server.graphqlPath}`));
};

startServer();

