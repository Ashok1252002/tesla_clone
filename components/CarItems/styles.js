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
		marginBottom: 10,
	},
	headerTitle: {
		color: "white",
		fontSize: 16,
		fontWeight: "bold",
		alignItems: "center",
		justifyContent: "center",
	},
	icon: {
		color: "white",
	},
	backgroundImage: {
		width: "100%",
		height: "100%",
		resizeMode: "cover",
		position: "absolute",
	},
	batterySection: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
	},
	batteryImage: {
		height: 26,
		width: 70,
		marginRight: 12,
	},
	batteryText: {
		color: "white",
		fontSize: 35,
		fontWeight: "bold",
	},
	status: {
		alignItems: "center",
		justifyContent: "center",
	},
	statusText: {
		color: "white",
		fontSize: 20,
		fontWeight: "bold",
	},
});

export default styles;
