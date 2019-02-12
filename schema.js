import {makeExecutableSchema, addMockFunctionsToSchema} from 'graphql-tools';
import resolvers from './resolvers.js'
const typeDefs = `type Author {
    id: String
    age: Int
    name: String
    books: [String]
}
    type Query {
        authors(age: Int): [Author]
        author(id: String): Author
    }
    type Mutation {
        addAuthor(name: String!, age: Int!, books: [String]!): Author
        deleteAuthor(id: String!): Author
        updateAuthor(id: String!, name: String!): Author
    }
`; 

// const typeDefs = `type Author {
//     id: Int
//     age: Int
//     name: String
//     books: [String]
// }
//     type Query {
//         authors: [Author]
//         author_by_id(id: Int): Author
//         author_by_age(age: Int): Author
//     }
// `; 

const schema = makeExecutableSchema({typeDefs, resolvers});
// addMockFunctionsToSchema{{schema}};

export default schema;