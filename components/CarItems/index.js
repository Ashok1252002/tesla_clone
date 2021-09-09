import React from "react";
import { View, Text, ImageBackground, Image } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCog, faToolbox } from "@fortawesome/free-solid-svg-icons";
import styles from "./styles";

const CarItem = () => {
	return (
		<View style={styles.carContainer}>
			<ImageBackground
				source={require("../../assets/background.png")}
				style={styles.backgroundImage}
			/>
			{/* Header */}
			<View style={styles.header}>
				<FontAwesomeIcon style={styles.icon} icon={faCog} size={24} />
				<Text style={styles.headerTitle}>AshModel</Text>
				<FontAwesomeIcon
					style={styles.icon}
					icon={faToolbox}
					size={24}
				/>
			</View>
			{/* Milage */}
			<View style={styles.batterySection}>
				<Image
					source={require("../../assets/battery.png")}
					style={styles.batteryImage}
				/>
				<Text style={styles.batteryText}>150 mi</Text>
			</View>
			{/* Status */}
			<View style={styles.status}>
				<Text style={styles.statusText}>Parked</Text>
			</View>
		</View>
	);
};

export default CarItem;
