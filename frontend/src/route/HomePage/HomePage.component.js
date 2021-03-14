import React from 'react'
import { useSelector } from 'react-redux'

export function HomePage(props) {
    const counter = useSelector(state => state.value)
    console.log(props)

    return (
        <div>HomePage { counter }</div>
    )
}

export default HomePage
