

const graphql = require('graphql');
const userType = require('./graphqlTypes/userType');
const postType = require('./graphqlTypes/postType');
const hobbyType = require('./graphqlTypes/hobbyType');

const {
    GraphQLObjectType,
    GraphQLID,
    GraphQLString,
    GraphQLInt,
    GraphQLList,
    GraphQLNonNull,
    GraphQLSchema
} = graphql;

var usersData = [
    {id: '1', name: 'Bond', age: 36, profession: 'doctor' },
    {id: '13', name: 'Anna', age: 26, profession: 'programmer' },
    {id: '211', name: 'Bella', age: 16, profession: 'lawyer' },
    {id: '19', name: 'Gin', age: 26, profession: 'mechanic' },
    {id: '125', name: 'Blue', age: 36, profession: 'teacher' }
];

var hobbiesData = [
    {id: '1', title: 'Programming', description: 'using computers to make the world a better place', userId: '1'  },
    {id: '2', title: 'Rowing', description: 'Sweat and feel better before eating donouts', userId: '13'  },
    {id: '3', title: 'Swimming', description: 'Get in the water and learn to become the water', userId: '13'  },
    {id: '4', title: 'Fencing', description: 'A hobby for fency people', userId: '125'  },
    {id: '5', title: 'Hiking', description: 'Hike and explore the world', userId: '1'  }
];

var postsData = [
    {id: '1', comment: 'building a mind', userId: '1' },
    {id: '2', comment: 'GraphQL is amazing', userId: '1' },
    {id: '3', comment: 'How to change the world', userId: '19' },
    {id: '4', comment: 'Be an example', userId: '211' },
    {id: '5', comment: 'follow your dreams', userId: '13' }
];


const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    description: 'description.....',
    
    fields: { 

        user: {
            name: 'user',
            type: new GraphQLNonNull(userType),
            args: {
                id: { type: GraphQLID }
            },
            resolve(_, {id}){
                return usersData.find(x => x.id === id);
            }
        },          

        post: {
            name: 'post',
            type: postType,
            args: {
                id: { type: GraphQLID }
            },
            resolve(_, {id}){
                return postsData.find(x => x.id === id);
            }
        },

        hobby: {
            name: 'hobby',
            type: hobbyType,
            args: {
                id: { type: GraphQLID }
            },
            resolve(_, {id}){
                //resolve with data - get and return data from data source
                return hobbiesData.find(x => x.id === id);
            }
        }
        
              
    },
   
});


module.exports = new GraphQLSchema({
    query: RootQuery 
});