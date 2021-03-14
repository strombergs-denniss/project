
import { gql } from '@apollo/client';

export const ATTRIBUTES = gql`
    query {
        attributes {
            id,
            code
        }
    }
`;

export const CREATE_ATTRIBUTE = gql`
    mutation CreateAttribute($attribute: AttributeInput!) {
        createAttribute(attribute: $attribute) {
            id,
            code
        }
    }
`;

export const UPDATE_ATTRIBUTE = gql`
    mutation UpdateAttribute($id: ID!, $attribute: AttributeInput!) {
        updateAttribute(id: $id, attribute: $attribute) {
            id,
            code
        }
    }
`;

export const DELETE_ATTRIBUTE = gql`
    mutation DeleteAttribute($id: ID!) {
        updateAttribute(id: $id)
    }
`;
