import { Button, StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 16,
    paddingHorizontal: 16,
    backgroundColor: "#F6F8F9",
  },
  heading: {
    fontSize: 16,
    fontWeight: "bold",
    paddingVertical: 8,
    marginTop: 18,
    marginBottom: 8,
  },
  scroll: {
    flex:1,
  },
  button: {
    marginTop: 16,
    width: 'auto',
    height: 48,
    backgroundColor: '#17C6ED',
    borderRadius: 8,
    justifyContent: 'center',
    alignContent: 'center',
  },
  btnText: {
    fontSize: 16,
    fontWeight: 'medium',
    color: '#fff',
    textAlign:'center'
  },
});
