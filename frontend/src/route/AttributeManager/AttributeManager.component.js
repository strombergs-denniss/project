import React from 'react'
import { useMutation, useQuery } from '@apollo/client';
import Manager from '../../component/Manager/Manager.component'
import { ATTRIBUTES, CREATE_ATTRIBUTE } from '../../query/Attribute.query'

export const form = {

}

export function AttributeManager() {
    const [createAttribute] = useMutation(CREATE_ATTRIBUTE);

    const { loading, error, data } = useQuery(ATTRIBUTES);

    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;

    console.log(data)

    return (
        <div className="AttributeManager">
            <button onClick={ () => createAttribute({ variables: { attribute: { code: 'TEST'} } }) }>Create Attribute</button>
            <Manager
                form={ form }
            />
        </div>
    )
}

export default AttributeManager
