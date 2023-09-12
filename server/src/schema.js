export const typeDefs = `#graphql
    type Query{
        notes: [Note!]!
    }

    type Author{
        id: ID!
        name: String!
        age: Int!
        photo: String
    }

    type Note{
        id: ID!
        title: String!
        description: String!
        author: Author!
    }
`;

const notes = [
  {
    id: 1,
    title: "Coding",
    description: "You should do coding today",
    author: {
      id: 1,
      name: "John",
      age: 36
    },
  },
  {
    id: 2,
    title: "Shopping",
    description: "You should do shopping today",
    author: {
      id: 2,
      name: "Emma",
      age: 23
    },
  },
  {
    id: 3,
    title: "Cooking",
    description: "You should do cooking today",
    author: {
      id: 3,
      name: "Duncan",
      age: 54
    },
  },
];

export const resolvers = {
  Query: {
    notes: () => notes
  },
};
