const authors = [
{
    id: 21,
    name: "JK Rowling",
    age: 50,
    books: ["Harry Potter and the Goblet of Fire", "Harry Potter and the Prisoner of Azkaban"]
}, 
{
    id: 34,
    name: "George RR Martin",
    age: 60,
    books: ["GOT - Song of Ice and Fire", "GOT - A Dance with Dragons"]
}, 
{
    id: 12,
    name: "Stephen King",
    age: 60,
    books: ["The Green Mile", "Carrie"]
}]

const resolvers = {
    Query: {
        authors: () => {
            return authors
        },
        author_by_id: (root, {id}) => {
            return authors.find(author => author.id === id);
        },
        author_by_age: (root, {age}) => {
            return authors.find(author => author.age === age);
        }
    }
}

export default resolvers;