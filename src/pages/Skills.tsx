import { Dimensions, ScrollView, StyleSheet, View } from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { ProgressBar, Text, Tooltip } from 'react-native-paper';
import Svg, { Path } from 'react-native-svg';
import * as simpleIcons from "simple-icons";
import { Picture } from '../components/Picture';

export function Skills() {
  return (
    <View style={styles.container}>
      <Picture />
      <View style={{ marginLeft: 10, marginRight: 10, marginBottom: 30, marginTop: 30}}>
        <Text variant='titleMedium' style={styles.text}>Abaixo estão algumas das tecnologias com as quais trabalho e meu nível de habilidade em cada uma.</Text>
        <Text variant='bodyMedium' style={styles.text}>Para descobrir o nome de cada tecnologia, pressione e segure o ícone por alguns instantes.</Text>
      </View>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.skillItem}>
          <Tooltip title='Angular 2+' leaveTouchDelay={3000}>
            <MaterialCommunityIcons name="angular" size={40} color="white"  />
          </Tooltip>
          <ProgressBar style={styles.progress} progress={0.7} color='#DE0837'/>
        </View>
        <View style={styles.skillItem}>
          <Tooltip title='Typescript' leaveTouchDelay={3000}>
            <MaterialCommunityIcons name="language-typescript" size={40} color="white"  />
          </Tooltip>
          <ProgressBar style={styles.progress} progress={0.78} color='#2F74C0'/>
        </View>
        <View style={styles.skillItem}>
          <Tooltip title='VueJS' leaveTouchDelay={3000}>
            <MaterialCommunityIcons name="vuejs" size={40} color="white"  />
          </Tooltip>
          <ProgressBar style={styles.progress} progress={0.55} color='#47BA87'/>
        </View>
        <View style={styles.skillItem}>
          <Tooltip title='Docker' leaveTouchDelay={3000}>
            <MaterialCommunityIcons name="docker" size={40} color="white"  />
          </Tooltip>
          <ProgressBar style={styles.progress} progress={0.7} color='#2568EF'/>
        </View>
        <View style={styles.skillItem}>
          <Tooltip title='Amazon Web Services' leaveTouchDelay={3000}>
            <MaterialCommunityIcons name="aws" size={40} color="white"  />
          </Tooltip>
          <ProgressBar style={styles.progress} progress={0.56} color='#1D2434'/>
        </View>
        <View style={styles.skillItem}>
          <Tooltip title='Java' leaveTouchDelay={3000}>
            <MaterialCommunityIcons name="language-java" size={40} color="white"  />
          </Tooltip>
          <ProgressBar style={styles.progress} progress={0.8} color='#5684A2'/>
        </View>
        <View style={styles.skillItem}>
          <Tooltip title='React' leaveTouchDelay={3000}>
            <MaterialCommunityIcons name="react" size={40} color="white"  />
          </Tooltip>
          <ProgressBar style={styles.progress} progress={0.6} color='#66DBFB'/>
        </View>
        <View style={styles.skillItem}>
          <Tooltip title='Spring Boot' leaveTouchDelay={3000}>
            <Svg width={40} height={40} viewBox="0 0 24 24">
              <Path d={simpleIcons.siSpring.path} fill="white" />
            </Svg>
          </Tooltip>
          <ProgressBar style={styles.progress} progress={0.7} color='#72B545'/>
        </View>
        <View style={styles.skillItem}>
          <Tooltip title='MySQL' leaveTouchDelay={3000}>
            <Svg width={40} height={40} viewBox="0 0 24 24">
              <Path d={simpleIcons.siMysql.path} fill="white" />
            </Svg>
          </Tooltip>
          <ProgressBar style={styles.progress} progress={0.85} color='#08668E'/>
        </View>
        <View style={styles.skillItem}>
          <Tooltip title='Git' leaveTouchDelay={3000}>
            <Svg width={40} height={40} viewBox="0 0 24 24">
              <Path d={simpleIcons.siGit.path} fill="white" />
            </Svg>
          </Tooltip>
          <ProgressBar style={styles.progress} progress={0.9} color='#F65625'/>
        </View>
        <View style={styles.skillItem}>
          <Tooltip title='GitHub' leaveTouchDelay={3000}>
            <Svg width={40} height={40} viewBox="0 0 24 24">
              <Path d={simpleIcons.siGithub.path} fill="white" />
            </Svg>
          </Tooltip>
          <ProgressBar style={styles.progress} progress={0.85} color='#6E2F8A'/>
        </View>
        <View style={styles.skillItem}>
          <Tooltip title='Linux' leaveTouchDelay={3000}>
            <Svg width={40} height={40} viewBox="0 0 24 24">
              <Path d={simpleIcons.siLinux.path} fill="white" />
            </Svg>
          </Tooltip>
          <ProgressBar style={styles.progress} progress={0.55} color='#F2AD08'/>
        </View>
        <View style={styles.skillItem}>
          <Tooltip title='.NET' leaveTouchDelay={3000}>
            <Svg width={40} height={40} viewBox="0 0 24 24">
              <Path d={simpleIcons.siDotnet.path} fill="white" />
            </Svg>
          </Tooltip>
          <ProgressBar style={styles.progress} progress={0.4} color='#613494'/>
        </View>
        <View style={styles.skillItem}>
          <Tooltip title='Python' leaveTouchDelay={3000}>
            <MaterialCommunityIcons name="language-python" size={40} color="white"  />
          </Tooltip>
          <ProgressBar style={styles.progress} progress={0.35} color='#FFCE41'/>
        </View>
        <View style={styles.skillItem}>
          <Tooltip title='PostgreSQL' leaveTouchDelay={3000}>
            <Svg width={40} height={40} viewBox="0 0 24 24">
              <Path d={simpleIcons.siPostgresql.path} fill="white" />
            </Svg>
          </Tooltip>
          <ProgressBar style={styles.progress} progress={0.5} color='#396C94'/>
        </View>
        <View style={styles.skillItem}>
          <Tooltip title='HTML5' leaveTouchDelay={3000}>
            <MaterialCommunityIcons name="language-html5" size={40} color="white"  />
          </Tooltip>
          <ProgressBar style={styles.progress} progress={0.96} color='#E5532D'/>
        </View>
        <View style={styles.skillItem}>
          <Tooltip title='CSS3' leaveTouchDelay={3000}>
            <MaterialCommunityIcons name="language-css3" size={40} color="white"  />
          </Tooltip>
          <ProgressBar style={styles.progress} progress={0.85} color='#2D53E5'/>
        </View>
        <View style={styles.skillItem}>
          <Tooltip title='NestJS' leaveTouchDelay={3000}>
            <Svg width={40} height={40} viewBox="0 0 24 24">
              <Path d={simpleIcons.siNestjs.path} fill="white" />
            </Svg>
          </Tooltip>
          <ProgressBar style={styles.progress} progress={0.45} color='#E12A54'/>
        </View>
        <View style={styles.skillItem}>
          <Tooltip title='NodeJS' leaveTouchDelay={3000}>
            <MaterialCommunityIcons name="nodejs" size={40} color="white"  />
          </Tooltip>
          <ProgressBar style={styles.progress} progress={0.8} color='#8FC708'/>
        </View>
        <View style={styles.skillItem}>
          <Tooltip title='Kotlin' leaveTouchDelay={3000}>
            <MaterialCommunityIcons name="language-kotlin" size={40} color="white"  />
          </Tooltip>
          <ProgressBar style={styles.progress} progress={0.65} color='#6F59D9'/>
        </View>
        <View style={styles.skillItem}>
          <Tooltip title='Terraform' leaveTouchDelay={3000}>
            <MaterialCommunityIcons name="terraform" size={40} color="white"  />
          </Tooltip>
          <ProgressBar style={styles.progress} progress={0.3} color='#6449EA'/>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  scrollView: {
    justifyContent: 'flex-start',
    marginLeft: 10,
    marginRight: 10,
    gap: 30,
    paddingBottom: 50
  },
  progress: {
    width: Dimensions.get('window').width - 80,
    height: 15,
    borderRadius: 20,
    backgroundColor: '#cec5c5d1'
  },
  skillItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 10
  },
  text: {
    color: '#fff',
    marginTop: 10
  }
})