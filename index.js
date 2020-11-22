const { ApolloServer, gql } = require('apollo-server');
const { getAddresses } = require('./services/address');

const typeDefs = gql`  
  type Address {
 		lat: Float
 		lng: Float
 		addressName: String
 	}
  
  type Query {
    addresses(lat: Float!, lng: Float!, dist: Int!): [Address]
  }	
`;

const resolvers = {
	Query: {
		addresses: (_, {lat, lng, dist}) => getAddresses(lat, lng, dist)
	},
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
	console.log(`🚀  Server ready at ${url}`);
});
