// import React, { useState } from "react";
// import { View, Button, Text } from "react-native";
// import styles from "./Cal.styled";
// import math from "mathjs";

// const CalApp = () => {
//   const [currentNumber, setCurrentNumber] = useState("0");
//   const [operator, setOperator] = useState(null);
//   const [previousNumber, setPreviousNumber] = useState(null);

//   const handleButtonPress = (buttonValue) => {
//     if (buttonValue === "C") {
//       // Reset calculator
//       setCurrentNumber("0");
//       setOperator(null);
//       setPreviousNumber(null);
//       return;
//     }

//     if (
//       buttonValue === "+" ||
//       buttonValue === "-" ||
//       buttonValue === "×" ||
//       buttonValue === "÷"
//     ) {
//       // Set operator
//       setOperator(buttonValue);
//       setPreviousNumber(currentNumber);
//       setCurrentNumber("0");
//       return;
//     }

//     if (buttonValue === "*") {
//       // Add decimal point
//       if (currentNumber.includes(".")) {
//         return;
//       }
//       setCurrentNumber(currentNumber + ".");
//       return;
//     }

//     if (buttonValue === "=") {
//       // Calculate result
//       const result = math.evaluate(
//         `${previousNumber} ${operator} ${currentNumber}`
//       );
//       setCurrentNumber(result.toString());
//       setOperator(null);
//       setPreviousNumber(null);
//       return;
//     }

//     // Add digit to current number
//     if (currentNumber === "0") {
//       setCurrentNumber(buttonValue);
//     } else {
//       setCurrentNumber(currentNumber + buttonValue);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Calc App</Text>
//       <Text>{currentNumber}</Text>
//       <View>
//         <View style={styles.buttonClear}>
//           <Button title="C" onPress={() => handleButtonPress('C')} color={"red"} />
//         </View>
//         <View style={styles.buttonContainer}>
//           <Button
//             title="0"
//             onPress={() => {
//               handleButtonPress("0");
//             }}
//             color={"red"}
//           />
//           <Button
//             title="1"
//             onPress={() => {
//               handleButtonPress("1");
//             }}
//             color={"yellow"}
//           />
//           <Button
//             title="2"
//             onPress={() => {
//               handleButtonPress("2");
//             }}
//             color={"green"}
//           />
//           <Button
//             title="3"
//             onPress={() => {
//               handleButtonPress("3");
//             }}
//             color={"blue"}
//           />
//         </View>
//         <View style={styles.buttonContainer}>
//           <Button
//             title="4"
//             onPress={() => {
//               handleButtonPress("4");
//             }}
//             color={"red"}
//           />
//           <Button
//             title="5"
//             onPress={() => {
//               handleButtonPress("5");
//             }}
//             color={"yellow"}
//           />
//           <Button
//             title="6"
//             onPress={() => {
//               handleButtonPress("6");
//             }}
//             color={"green"}
//           />
//           <Button
//             title="7"
//             onPress={() => {
//               handleButtonPress("7");
//             }}
//             color={"blue"}
//           />
//         </View>
//         <View style={styles.buttonContainer}>
//           <Button
//             title="8"
//             onPress={() => {
//               handleButtonPress("8");
//             }}
//             color={"red"}
//           />
//           <Button
//             title="9"
//             onPress={() => {
//               handleButtonPress("9");
//             }}
//             color={"yellow"}
//           />
//           <Button
//             title="10"
//             onPress={() => {
//               handleButtonPress("10");
//             }}
//             color={"green"}
//           />
//           <Button
//             title=","
//             onPress={() => {
//               handleButtonPress(",");
//             }}
//             color={"blue"}
//           />
//         </View>
//         <View style={styles.buttonContainer}>
//           <Button
//             title="+"
//             onPress={() => {
//               handleButtonPress("+");
//             }}
//             color={"red"}
//           />
//           <Button
//             title="-"
//             onPress={() => {
//               handleButtonPress("-");
//             }}
//             color={"yellow"}
//           />
//           <Button
//             title="/"
//             onPress={() => {
//               handleButtonPress("/");
//             }}
//             color={"green"}
//           />
//           <Button
//             title="x"
//             onPress={() => {
//               handleButtonPress("*");
//             }}
//             color={"blue"}
//           />
//           <Button
//             title="="
//             onPress={() => {
//               handleButtonPress("=");
//             }}
//             color={"blue"}
//           />
//         </View>
//       </View>
//     </View>
//   );
// };

// export default CalApp;
