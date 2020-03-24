import React from 'react'
import { FlatList, View, Text} from 'react-native'

function Carousal(
    {   data, 
        renderItem, 
        keyExtractor, 
        onEndReached = null, 
        style, 
        horizontal=true,
        ListHeaderComponent,
        ListFooterComponent
    }){
    return (
        <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={keyExtractor}
            horizontal={horizontal}
            initialNumToRender={4}
            onEndReached={onEndReached}
            onEndReachedThreshold={1}
            style={style}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={ListHeaderComponent}
            ListFooterComponent={ListFooterComponent}
        />
    )
};

export default Carousal;
