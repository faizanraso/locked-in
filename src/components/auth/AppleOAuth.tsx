import * as AppleAuthentication from "expo-apple-authentication";
import { View, StyleSheet } from "react-native";

export default function App() {
  return (
    <AppleAuthentication.AppleAuthenticationButton
      buttonType={AppleAuthentication.AppleAuthenticationButtonType.SIGN_IN}
      buttonStyle={AppleAuthentication.AppleAuthenticationButtonStyle.BLACK}
      cornerRadius={5}
      style={styles.button}
      onPress={async () => {
        try {
          const credential = await AppleAuthentication.signInAsync({
            requestedScopes: [
              AppleAuthentication.AppleAuthenticationScope.FULL_NAME,
              AppleAuthentication.AppleAuthenticationScope.EMAIL,
            ],
          });
          // signed in
        } catch (e: any) {
          if (e.code === "ERR_REQUEST_CANCELED") {
            // handle that the user canceled the sign-in flow
          } else {
            // handle other errors
            console.log(e);
          }
        }
      }}
    />
  );
}

const styles = StyleSheet.create({
  button: {
    width: 200,
    height: 44,
  },
});
