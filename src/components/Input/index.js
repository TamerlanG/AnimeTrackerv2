import React from 'react'
import { TextInput, StyleSheet, View } from 'react-native' 

/** Component Libraries */
import Icon from 'react-native-vector-icons/SimpleLineIcons';

export function SearchBar({ placeholder, value, onChangeText, onSubmitEditing }){
    const ICON_SIZE = 28;
    const ICON_COLOR = "black";
    return ( 
        <View style={styles.search_container}>
            <Icon name='magnifier' size={ICON_SIZE} color={ICON_COLOR} />
            <TextInput
                style={styles.textInputStyle}
                placeholder={placeholder}
                value={value}
                onChangeText={onChangeText}
                autoCorrect={false}
                onSubmitEditing={onSubmitEditing}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    search_container: {
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 5,
        paddingVertical: 16,
        paddingHorizontal: 29,
    },
    textInputStyle: {
        width: '80%',
        marginLeft: 14,
        fontFamily: 'SFProDisplay-Regular',
        fontSize: 16,
        lineHeight: 18,
    }
});