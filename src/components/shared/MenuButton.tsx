// Using the provided hook
import { useActionSheet } from "@expo/react-native-action-sheet";
import { Ionicons } from "@expo/vector-icons";
import { Button, StyleSheet, TouchableOpacity } from "react-native";
import { useAuth } from "../../store/AuthContext";
import { router } from "expo-router";

type Link = {
  name: string;
  path: string;
};

type MenuButtonProps = {
  links?: Link[];
};

export default function MenuButton({ links }: MenuButtonProps) {
  const { showActionSheetWithOptions } = useActionSheet();
  const { logout } = useAuth();

  const onPress = () => {
    const options = ["Logout"];

    if (links) {
      links.forEach((link) => {
        options.unshift(link.name);
      });
    }

    const destructiveButtonIndex = options.length - 1;
    const cancelButtonIndex = -1;
    const showSeparators = true;

    showActionSheetWithOptions(
      {
        options,
        cancelButtonIndex,
        showSeparators,
        destructiveButtonIndex,
      },
      (selectedIndex: number | undefined) => {
        if (selectedIndex === options.length - 1) {
          logout();
          return;
        }

        if (selectedIndex === -1) {
          return;
        }

        const route = links?.find(
          (link) => link.name === options[selectedIndex]
        );

        if (route) {
          router.push(route.path);
        }
      }
    );
  };

  return (
    <TouchableOpacity
      style={styles.buttonContainer}
      onPress={onPress}
      testID="menu-button"
    >
      <Ionicons name="menu-outline" size={32} color="black" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    marginHorizontal: 12,
  },
});
