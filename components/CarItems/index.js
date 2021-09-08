import React from "react";
import { View, Text } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCog, faToolbox } from "@fortawesome/free-solid-svg-icons";
import styles from "./styles";

const CarItem = () => {
	return (
		<View style={styles.carContainer}>
			{/* Header */}
			<View style={styles.header}>
				<FontAwesomeIcon icon={faCog} size={24} />
				<Text style={styles.headerTitle}>AshMobile</Text>
				<FontAwesomeIcon icon={faToolbox} size={24} />
			</View>
		</View>
	);
};

export default CarItem;
