export const getContainerProps = (iconOnly: boolean) =>
  ({
    display: "flex",
    alignItems: "center",
    position: "relative",
    width: "100%",
    gap: iconOnly ? 0 : 1.5,
    flex: "none",
  } as const);

export const getIconStyle = (
  index: number,
  iconSize: number,
  disabled: boolean
) => ({
  marginLeft: index === 0 ? undefined : `${-(iconSize / 3)}px`,
  opacity: disabled ? 0.5 : 1,
});
