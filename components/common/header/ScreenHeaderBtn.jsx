import { Image, TouchableOpacity } from "react-native";

import styles from "./screenheader.style";
import { useTheme } from "../../../app/_layout";
const ScreenHeaderBtn = ({ iconUrl, dimension, handlePress }) => {
  const { theme } = useTheme();
  return (
    <TouchableOpacity style={styles.btnContainer(theme)} onPress={handlePress}>
      <Image
        source={iconUrl}
        resizeMode="cover"
        style={styles.btnImg(dimension)}
      />
    </TouchableOpacity>
  );
};

export default ScreenHeaderBtn;
