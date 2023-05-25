import React from 'react';
import { Text } from 'react-native';
import { theme } from 'theme';

const Typography = ({ children, variant = 'p1', color, style }) => {

    return(
        <Text style={{...styles[variant], color, ...style}}>
            {children}
        </Text>
    )
}

const styles = theme.typography;

export default Typography;