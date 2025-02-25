import { View, Text, TextInput, StyleSheet, TextInputProps } from 'react-native'
import React, { useState } from 'react'
import { THEME_COLORS } from '../../constants/globalStyles';
import { Ionicons } from '@expo/vector-icons';

interface CustomTextInputProps extends TextInputProps {
    placeholderTextColor?: string;
    icon?: string;
}

export default function CustomInput({ placeholderTextColor = '#888', icon, ...props }: CustomTextInputProps) {
    const [isFocused, setIsFocused] = useState(false);

    const renderIcon = () => {
        if(icon) {
             return <Ionicons 
                name={icon} 
                size={18} 
                color={THEME_COLORS.GRAY_COLOR} 
            />
        }
    }

    return (
        <View style={[styles.inputContainer, isFocused && styles.inputFocused]}>
            {renderIcon()}

            <TextInput 
                style={[styles.input, isFocused && styles.inputFocused]}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                placeholderTextColor={THEME_COLORS.GRAY_COLOR}
                {...props} 
            />
        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: THEME_COLORS.GRAY_COLOR,
        padding: 10,
        outlineWidth: 0,
        gap: 10,
    },
    input: {
        width: 230,
        outlineWidth: 0,
    },
    inputFocused: {
        borderBottomColor: THEME_COLORS.PRIMARY_COLOR,
    },
});