import React from 'react';
import { Alert, Linking, StyleSheet, View } from 'react-native';
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

export function Links() {
    const navigateToExternal = async (urlApp: string, urlWeb: string) => {
        try {
            await Linking.openURL(urlApp);
        } catch {
            await Linking.openURL(urlWeb);
        }
    }

    const navigation = useNavigation();

    const openWebView = (url: string) => {
        // Sobe para o Stack raiz que contém a screen "webview"
        const rootNav = navigation.getParent();
        rootNav?.navigate('webview', { url });
    };

    const handleEmail = () => {
        const email = "henrique.jaldim@hotmail.com";
        const subject = "Contato";
        const body = "Olá, gostaria de falar sobre...";

        const url = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

        Linking.openURL(url).catch(() => {
        Alert.alert("Erro", "Não foi possível abrir o aplicativo de e-mail.");
        });
    }



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
                'linkedin://in/henriquejm98', 
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

            <Button
            labelStyle={styles.labelButton}
            contentStyle={styles.contentButton}
            children="Enviar E-mail" 
            icon="mail" 
            buttonColor='#1a9b9dd1' 
            style={styles.button}
            mode="contained"
            onPress={handleEmail}
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
        lineHeight: 40
    },
    contentButton: {
        height: 60,
        justifyContent: 'center',
        alignItems: 'center'
    }
})