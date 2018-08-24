import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1ac5c3",
    alignItems: "center",
    justifyContent: "center"
  },
  buttonContainer: {
    backgroundColor: "#fff",
    borderRadius: 25,
    borderColor: "#fff",
    paddingTop: 3,
    paddingBottom: 3,
    paddingLeft: 5,
    paddingRight: 5,
    marginBottom: 5
  },
  LPcontainer: {
    flex: 1,
    backgroundColor: "#1ac5c3",
    alignItems: "center",
    justifyContent: "center"
  },
  logo: {
    //fontFamily: 'Avenir-Medium',
    fontSize: 100,
    color: "#fff"
  },
  ideapost: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#fff",
    // width: "90%",
    paddingBottom: 15,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 15,
    marginBottom: 10,
    marginTop: 10
  },
  ratebtndiv: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 8
  },
  IdeaPostText: {
    fontSize: 18,
    paddingBottom: 5,

  },

  inputDiv: {
    flexDirection: 'row',
    width: '98%',
    backgroundColor: "#fff",
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#fff",
    paddingBottom: 15,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 15,
    marginBottom: 3,
    marginTop: 10
  },
  ideaInputText: {
    backgroundColor: "#fff",
    fontSize: 18,
    paddingBottom: 10,
    paddingLeft: 5,
    paddingRight: 120, // parempi tapa saada nuoli oikealle? right:0 ei toimi
    paddingTop: 5
  },
  arrow: {
    right: 0,
    height: 50,
    width: 50
  }
});
