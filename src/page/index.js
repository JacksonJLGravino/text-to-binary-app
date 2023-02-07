import React, { useState } from 'react'
import { StyleSheet, View, TextInput, ScrollView, Text } from 'react-native'

export function Page() {
  const [texto, setTexto] = useState('')
  let resultados = texto.split('')

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>TEXT TO BINARY</Text>
        <Text style={styles.subtitle}>ASCII / UTF-8</Text>
      </View>

      <View style={styles.textview}>
        <Text style={styles.cabecario}>escreva seu texto</Text>
        <TextInput
          style={styles.textinput}
          onChangeText={setTexto}
          autoCorrect={false}
          multiline
        ></TextInput>

        <ScrollView>
          <View style={styles.resposta}>
            {resultados.map((item, key) => (
              <Text key={key} style={styles.conversao}>
                {'(' + item + ')' + ' = ' + item.charCodeAt(0).toString(2)}{' '}
              </Text>
            ))}
          </View>
        </ScrollView>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#141414'
  },
  header: {
    padding: 25,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    color: '#14e614',
    fontSize: 29
  },
  subtitle: {
    color: '#14e614',
    fontSize: 23
  },
  cabecario: {
    color: '#14e614'
  },
  textview: {
    marginHorizontal: 25,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textinput: {
    borderWidth: 1,
    borderColor: '#14e614',
    color: '#14e614',
    backgroundColor: '#282828',
    width: '100%'
  },
  resposta: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  conversao: {
    color: '#14e614',
    fontSize: 17
  }
})
