"use client";
import React from "react";

import { useQuery, gql } from "@apollo/client";

const GET_ITEMS = gql`
  query Query {
    allEventType {
      name
      image {
        asset {
          url
          metadata {
            dimensions {
              width
              height
            }
          }
          altText
        }
      }
    }
  }
`;

export const Boumso: React.FC = () => {
  const { loading, error, data } = useQuery(GET_ITEMS);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  console.log(data);

  return (
    <>
      <h1>{data.allEventType[0].name}</h1>
      <img
        src={data.allEventType[0].image.asset.url}
        alt="BANANA"
        width={500}
        height={300}
      />
    </>
  );
};
