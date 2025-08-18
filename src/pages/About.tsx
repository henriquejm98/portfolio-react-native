import { ScrollView, StyleSheet, View } from 'react-native';
import { Picture } from '../components/Picture';
import { Text } from 'react-native-paper';


export function About() {
  return (
    <View style={styles.container}>
      <Picture />
      <ScrollView style={{ marginTop: 30, marginLeft: 10, marginRight: 10}}>
        <Text style={styles.text} variant='titleLarge'>
          Olá, me chamo Henrique Jaldim Mosca.
        </Text>
        <Text variant="bodyLarge" style={styles.text}>
          Sou um profissional de tecnologia com 4 anos de experiência atuando em empresas nacionais e multinacionais, passando por setores de alimentos e serviços de TI.
        </Text>
        <Text variant="bodyLarge" style={styles.text}>
          Gosto de trabalhar com desenvolvimento de software, principalmente no backend, criando e mantendo APIs REST usando Spring Boot, Nest.js e TypeScript. Também já me aventurei bastante no front-end, com Angular, React, HTML, CSS e JavaScript (e agora, com React Native também).
        </Text>
        <Text variant="bodyLarge" style={styles.text}>
          Tenho interesse em todo o ciclo da aplicação, por isso venho estudando e aplicando práticas de DevOps, com ferramentas como Docker, CI/CD, Kubernetes e Terraform. 🚀
        </Text>
        <Text variant="bodyLarge" style={styles.text}>
          Participei de projetos em times ágeis (Scrum e Kanban), construindo soluções voltadas para organização e gestão de escritórios.
        </Text>
        <Text variant="bodyLarge" style={styles.text}>
          Atualmente, estou direcionando meus estudos para backend e dados, explorando engenharia de dados, Python e fundamentos de IA/Machine Learning — áreas que me motivam bastante e que vejo como o futuro da tecnologia.
        </Text>
        <Text variant="bodyLarge" style={styles.text}>
          💡 Resumindo: gosto de aprender, de encarar desafios e de construir soluções que realmente fazem diferença.
        </Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center'
  },
  text: {
    color: '#fff',
    marginTop: 10
  }
})