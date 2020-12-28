
const graphql = require('graphql');

const {
    GraphQLObjectType,
    GraphQLID,
    GraphQLString,
    GraphQLInt,
    GraphQLList
} = graphql;

module.exports = new GraphQLObjectType({    
    name: 'hobbyType',
    description: 'documentation for post....',
    fields: ()=> ({
        id: { 
            type: GraphQLID 
        },
        title: {
            type: GraphQLString 
        },
        description: { 
            type: GraphQLString
        },
        userId: { 
            type: GraphQLString
        }
       
    })
});