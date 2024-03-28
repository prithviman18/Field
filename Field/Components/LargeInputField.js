import React from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Text } from 'react-native';

const LargeInputField = ({
    label,
    error,
    ...props
}) => {
    return (
        <View style={styles.formRow} >
            <Text style={styles.label}>{label}</Text>
            <TextInput style={styles.bigInput} {...props} />

        </View>
    )
}
const styles = StyleSheet.create({
    formRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
      },
      label: {
        width: 120,
        marginRight: 10,
        fontSize: 14,
        color: "#111111",
        fontStyle: "italic",
      },
      input: {
        flex: 1,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        padding: 10,
        fontSize: 11,
        height: 32,
        fontStyle:"italic"
      },
      bigInput: {
        flex: 1,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        padding: 10,
        height: 60,
        fontStyle:"italic"
      },
      placeholderStyle:{
        fontSize:13,
        color:"grey",
        fontStyle: "italic"
      },
})

export default LargeInputField;