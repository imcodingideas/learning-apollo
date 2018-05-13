import { createApolloServer } from "meteor/apollo";
import { makeExecutableSchema } from "graphql-tools";

import ResolutionsSchema from "../../api/resolutions/Resolutions.graphql";

const testSchema = `
type Query {
  hi: String
  resolutions: [Resolution]
}
`;

const typeDefs = [testSchema, ResolutionsSchema];

const resolvers = {
  Query: {
    hi() {
      return "Hello Joseph";
    },
    resolutions() {
      return [
        {
          _id: "asljsldkjf",
          name: "Get stuff done!"
        },
        {
          _id: "fffffffffff",
          name: "Go back to the gym!"
        },
      ];
    }
  }
};

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

createApolloServer({ schema });
