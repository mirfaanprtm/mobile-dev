import React from "react";
import MainContainer from "../../shared/components/MainContainer";
import TextLabel from "../../shared/components/TextLabel";
import { StyleSheet, View } from "react-native";
import FormInput from "../../shared/components/FormInput";
import FormButton from "../../shared/components/FormButton";
import { useTheme } from "../../shared/context/ThemeContext";
import FormPassword from "../../shared/components/FormPassword";


const Login = () => {
  const theme = useTheme();
  const styles = styling(theme);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  return (
    <MainContainer>
      <View style={styles.text}>
        <TextLabel text={"Welcome!"} label={"h2"} />
        <FormInput
          value={email}
          onChangeValue={setEmail}
          placeholder={"Input Your Email"}
          keyboard={"email-address"}
        />
        <FormPassword
          value={password}
          onChangeValue={setPassword}
          placeholder={"Input Your Password"}
        />
      </View>
      <FormButton label="Login" onClick={() => {}} />
    </MainContainer>
  );
};

const styling = (theme) =>
  StyleSheet.create({
    text: {
      alignItems: "center",
    },
  });

export default Login;
