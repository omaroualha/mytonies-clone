import React, { FC } from "react";
import { useTheme } from "styled-components";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { EvilIcons, Ionicons } from "@expo/vector-icons";
import { Box, Label } from "@/components/atoms";

interface WebViewHeaderProps {
  title: string;
  backButton?: boolean;
  handleBackPress?: () => void;
  closeButton?: boolean;
}

export const WebViewHeader: FC<WebViewHeaderProps> = (props) => {
  const { title, backButton, handleBackPress, closeButton } = props;
  const navigation = useNavigation();
  const theme = useTheme();
  return (
    <Box
      px="L"
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
      backgroundColor={theme.colors.primary.light}
      height={60}
    >
      <Box flex={1}>
        {backButton && (
          <TouchableOpacity onPress={handleBackPress}>
            <Ionicons
              name="chevron-back"
              size={24}
              color={theme.colors.primary.brand}
            />
          </TouchableOpacity>
        )}
      </Box>
      <Box flex={2} alignItems={"center"}>
        <Label variant="L2" numberOfLines={1}>
          {title}
        </Label>
      </Box>
      <Box flex={1} alignItems="flex-end">
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            width: 28,
            height: 28,
            borderRadius: 15,
            backgroundColor: theme.colors.neutral.grey10,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <EvilIcons name="close" size={22} color="black" />
        </TouchableOpacity>
      </Box>
    </Box>
  );
};
