
const graphql = require('graphql');
const postType = require('./postType');
const hobbyType = require('./hobbyType');

const {
    GraphQLObjectType,
    GraphQLID,
    GraphQLString,
    GraphQLInt,
    GraphQLList,
    GraphQLNonNull,
} = graphql;

var postsData = [
    {id: '1', comment: 'building a mind', userId: '1' },
    {id: '2', comment: 'GraphQL is amazing', userId: '1' },
    {id: '3', comment: 'How to change the world', userId: '19' },
    {id: '4', comment: 'Be an example', userId: '211' },
    {id: '5', comment: 'follow your dreams', userId: '13' }
];

var hobbiesData = [
    {id: '1', title: 'Programming', description: 'using computers to make the world a better place', userId: '1'  },
    {id: '2', title: 'Rowing', description: 'Sweat and feel better before eating donouts', userId: '13'  },
    {id: '3', title: 'Swimming', description: 'Get in the water and learn to become the water', userId: '13'  },
    {id: '4', title: 'Fencing', description: 'A hobby for fency people', userId: '125'  },
    {id: '5', title: 'Hiking', description: 'Hike and explore the world', userId: '1'  }
];

module.exports = new GraphQLObjectType({
    name: 'userType',
    description: 'documentation for user....',
    fields: ()=> ({
        id: {
            name: 'Id',
            type: GraphQLID
        },
        name: {
            name: 'Name',
            type: GraphQLString 
        },
        age: { 
            name: 'Age',
            type: GraphQLInt 
        },
        profession: { 
            name: 'Profession',
            type: GraphQLString 
        },   
        posts: {
            name: 'posts',
            type: new GraphQLList(postType),            
            resolve(parent, args){
                return postsData.filter(p => p.userId === parent.id);
            }
        },
        hobbies: {
            name: 'hobbies',
            type: new GraphQLList(hobbyType),            
            resolve(parent, args){
                return hobbiesData.filter(p => p.userId === parent.id);
            }
        }


    })
});

