
const graphql = require('graphql');

const {
    GraphQLObjectType,
    GraphQLID,
    GraphQLString,
    GraphQLInt,
    GraphQLList,
    GraphQLSchema
} = graphql;

module.exports = new GraphQLObjectType({    
    name: 'postType',
    description: 'documentation for post....',
    fields: ()=> ({
        id: { 
            name: 'Id',
            type: GraphQLID 
        },
        comment: {
            name: 'comment',
            type: GraphQLString 
        },
        userId: { 
            name: 'userId',
            type: GraphQLString
        },
       
    })
});