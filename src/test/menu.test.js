const { ApolloServer } = require("@apollo/server");
const typeDefs = require("../schema/menu.schema");
const resolvers = require("../resolvers/menu.resolver");

describe("GraphQL Menu API - Basic Test", () => {
  let server;
  beforeAll(async () => {
    server = new ApolloServer({
      typeDefs,
      resolvers,
    });
    await server.start();
  });

  afterAll(async () => {
    await server.stop();
  });

  it("should fetch all categories", async () => {
    const query = `
      query {
        categories {
          name
        }
      }
    `;
    const result = await server.executeOperation({ query });
    console.log(JSON.stringify(result, null, 2)); 
    const data = result.body.singleResult.data;
    expect(result.body.singleResult.errors).toBeUndefined();
    expect(data).toBeDefined();
    expect(data.categories).toBeDefined();
    expect(data.categories.length).toBeGreaterThan(0);
    data.categories.forEach((category) => {
      expect(category.name).toBeTruthy();
    });
  });
});
