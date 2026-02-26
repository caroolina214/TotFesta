import React from 'react';
import { Button, useTheme } from 'react-native-paper';

type BtnProps = React.ComponentProps<typeof Button>;


export default function Btn({ mode = "contained", style, labelStyle, ...props }: BtnProps) {
  const theme = useTheme();
  const isDark = theme.dark;

  // (theme.colors as any).quinary;
  const containedBg = isDark ? theme.colors.onPrimaryContainer : theme.colors.primary;
  const containedText = isDark ? theme.colors.primary : theme.colors.onPrimary;

  const outlinedBorder = theme.colors.onPrimaryContainer;
  const outlinedText = theme.colors.onPrimaryContainer;

  const textColor = isDark ? theme.colors.onPrimaryContainer : theme.colors.primary;

  const elevatedBg = isDark ? theme.colors.primary : theme.colors.onPrimary;
  const elevatedText = isDark ? theme.colors.onPrimary : theme.colors.onPrimaryContainer;
  const elevatedShadow = theme.colors.onBackground;

  const tonalBg = isDark ? theme.colors.onPrimary : theme.colors.onPrimaryContainer;
  const tonalText = isDark ? theme.colors.primary : theme.colors.onPrimary;


  return (
    <Button
      mode={mode}
      {...props}
      style={[
        mode === "contained" && { backgroundColor: containedBg },
        mode === "outlined" && { borderWidth: 2, borderColor: outlinedBorder },
        mode === "text" && { backgroundColor: "transparent" },
        mode === "elevated" && { backgroundColor: elevatedBg, elevation: 5, shadowColor: elevatedShadow },
        mode === "contained-tonal" && { backgroundColor: tonalBg },
        { borderRadius: 20 },
        style,
      ]}
      labelStyle={[
        mode === "contained" && { color: containedText, fontFamily: "Montserrat-Bold" },
        mode === "outlined" && { color: outlinedText, fontFamily: "Montserrat-Bold" },
        mode === "text" && { color: textColor, fontFamily: "Montserrat-Bold" },
        mode === "elevated" && { color: elevatedText, fontFamily: "Montserrat-Bold" },
        mode === "contained-tonal" && { color: tonalText, fontFamily: "Montserrat-Bold" },
        labelStyle,
      ]}
    >
      {props.children}
    </Button>
  );

}