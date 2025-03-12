// src/constants/theme.js
import COLORS from "./colors";

export const SIZES = {
  base: 8,
  small: 12,
  font: 14,
  medium: 16,
  large: 18,
  extraLarge: 24,
  padding: 20,
  radius: 10,
};

export const FONTS = {
  h1: { fontSize: SIZES.extraLarge * 1.5, fontWeight: "700" },
  h2: { fontSize: SIZES.extraLarge, fontWeight: "700" },
  h3: { fontSize: SIZES.large, fontWeight: "700" },
  h4: { fontSize: SIZES.medium, fontWeight: "600" },
  body1: { fontSize: SIZES.large, fontWeight: "400" },
  body2: { fontSize: SIZES.medium, fontWeight: "400" },
  body3: { fontSize: SIZES.font, fontWeight: "400" },
};

export { COLORS };
