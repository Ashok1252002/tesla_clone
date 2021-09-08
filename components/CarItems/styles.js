import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	carContainer: {
		width: "100%",
		height: "100%",
		backgroundColor: "orange",
		color: "white",
	},
	header: {
		marginTop: 50,
		marginLeft: 20,
		marginRight: 20,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
	headerTitle: {
		color: "white",
		fontSize: 16,
		fontWeight: "bold",
		alignItems: "center",
		justifyContent: "center",
	},
});

export default styles;
