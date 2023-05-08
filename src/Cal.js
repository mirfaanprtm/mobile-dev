// import React from "react";
// import { TextInput, View, Button, Text } from "react-native";
// import styles from "./Cal.styled";

// const Cal = () => {
//   const [number1, setNumber1] = React.useState("");
//   const [number2, setNumber2] = React.useState("");
//   const [result, setResult] = React.useState("");

//   const add = () => {
//     const tambah = Number(number1) + Number(number2);
//     setResult(tambah);
//   };

//   const subtract = () => {
//     const kurang = Number(number1) - Number(number2);
//     setResult(kurang);
//   };

//   const mutiply = () => {
//     const kali = Number(number1) * Number(number2);
//     setResult(kali);
//   };

//   const divide = () => {
//     const bagi = Number(number1) / Number(number2);
//     setResult(bagi);
//   };
  
//   return (
//       <View style={styles.container}>
//       <Text style={styles.title}>Simple Calculator App</Text>
//         <Text style={styles.result}>{result}</Text>
//       <TextInput
//         style={styles.input}
//         keyboardType="numeric"
//         placeholder="Enter Number 1 Here"
//         value={number1}
//         onChangeText={(value) => setNumber1(value)}
//       />
//       <TextInput
//         style={styles.input}
//         keyboardType="numeric"
//         placeholder="Enter Number 2 Here"
//         value={number2}
//         onChangeText={(value) => setNumber2(value)}
//       />
//       <View style={styles.buttonContainer}>
//         <Button title="+" onPress={add} color={"red"} />
//         <Button title="-" onPress={subtract} color={"yellow"} />
//         <Button title="/" onPress={divide} color={"green"} />
//         <Button title="*" onPress={mutiply} color={"blue"} />
//       </View>
//     </View>
//   );
// };

// export default Cal;
