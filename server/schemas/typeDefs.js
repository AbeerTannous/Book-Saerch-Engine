//const {signToken}= require('../utils/auth');
const {gql} = require('apollo-server-express');

const typDefs = gql`

type Book {
    _id:ID!
    bookId:string
    discription:String
    image:String
    title:String
    link:String
    authers:[String]
}
 type User {
    _id:ID
    username:string
    eamil:string
    bookCount:Int
    savedBooks:[Book]
 }

type Auth{
    token: ID!
    user: User
}

input savedBooksInput{
    authers:[String]
    bookId:string
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
     addUser(username: String!,password:String!):Auth
     saveBook(input:savedBooksInput):USer
     removeBook(bookId:String!):User
 }


`;












module.exports = typDefs;