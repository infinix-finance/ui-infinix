export const containerProps = {
  display: "flex",
  alignItems: "flex-start",
  gap: 1.5,
  flex: "none",
} as const;

export const getIconStyle = (index: number, iconSize: number) => ({
  marginLeft: index === 0 ? undefined : `${-(iconSize / 3)}px`,
});

export const textContainerStyle = {
  display: "flex",
  flexDirection: "column",
  gap: 0.25,
};
