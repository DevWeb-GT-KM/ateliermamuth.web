import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://78fmkl52.api.sanity.io/v2023-08-01/graphql/production/experiment", // Replace with your API URL
  cache: new InMemoryCache(),
});

export default client;
