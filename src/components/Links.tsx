import React from 'react';
import { Linking, StyleSheet, View } from 'react-native';
import { Button } from 'react-native-paper';
import { NavigationProp, ParamListBase, useNavigation } from '@react-navigation/native';

export function Links() {
    const navigateToExternal = async (urlApp: string, urlWeb: string) => {
        const supported = await Linking.canOpenURL(urlApp);
        if (supported) {
            await Linking.openURL(urlApp);
        } else {
            openWebView(urlWeb)
        }
    }

    const navigation = useNavigation();

    const openWebView = (url: string) => {
        // Sobe para o Stack raiz que contém a screen "webview"
        const rootNav = navigation.getParent();
        rootNav?.navigate('webview', { url });
    };



    return (
        <View style={styles.container}>
            <Button 
            labelStyle={styles.labelButton} 
            contentStyle={styles.contentButton}
            children="LinkedIn" 
            icon="linkedin" 
            buttonColor='#0A66C2' 
            style={styles.button} 
            mode="contained"
            onPress={() => navigateToExternal(
                'linkedin://profile/henriquejm98', 
                'https://www.linkedin.com/in/henriquejm98'
            )}
            />
                
            <Button
            labelStyle={styles.labelButton}
            contentStyle={styles.contentButton}
            children="GitHub" 
            icon="github" 
            buttonColor='#060842' 
            style={styles.button}
            mode="contained"
            onPress={() => openWebView("https://github.com/henriquejm98")}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        gap: 30,
        width: '100%'
    },
    button: {
        width: '90%',
        alignSelf: 'center',
        height: 60
    },
    labelButton: {
        fontSize: 30,
        lineHeight: 30
    },
    contentButton: {
        height: 60,
        justifyContent: 'center',
        alignItems: 'center'
    }
})