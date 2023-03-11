import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useEffect } from "react"


export default function App() {
  return (
    <View style={styles.container}>
			<LinearGradient
        colors={['rgba(16, 150, 18, 0.8)', 'transparent']}
				style={styles.background}
      />
			<Image 
				source={require("./assets/tree.png")}
				style={styles.img}
			/>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 300,
  },
	img: {
		width: 250,
		height: 300,
		position: "absolute",
		top: 170
	}
});
