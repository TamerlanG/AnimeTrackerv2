import React from 'react'
import { View } from 'react-native'

const Spacing = ({ bottom }) => {
    return (
        <View style={{ marginBottom: bottom || 0 }}/>
    )
}

export default Spacing;
