import React from 'react'
import { useSelector } from 'react-redux'
import { useQuery, gql } from '@apollo/client';

const EXCHANGE_RATES = gql`
  query {
        stores {
            id,
            code
        }
  }
`;

export function Cart() {
    const counter = useSelector(state => state)
    console.log(counter)

    const { loading, error, data } = useQuery(EXCHANGE_RATES);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    console.log(data)

    return (
        <div>Cart</div>
    )
}

export default Cart
