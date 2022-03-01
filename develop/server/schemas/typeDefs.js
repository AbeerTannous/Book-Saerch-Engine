
const {gql} = require('apollo-server-express');

const typeDefs = gql`

type Book {
    _id:ID!
    bookId:String
    discription:String
    image:String
    title:String
    link:String
    authers:[String]
}
 type User {
    _id:ID
    username:String
    eamil:String
    bookCount:Int
    savedBooks:[Book]
 }

type Auth{
    token: ID!
    user: User
}

input savedBooksInput{
    authers:[String]
    bookId:String
    discription:String
    image:String
    title:String
    link:String
}

type Query{
  me:User
}
 type Mutation{
     login(email:String!,password:String!):Auth
     addUser(username: String!,email : String!,password:String!):Auth
     saveBook(bookData:savedBooksInput):User
     removeBook(bookId:String!):User
 }


`;




module.exports = typeDefs;