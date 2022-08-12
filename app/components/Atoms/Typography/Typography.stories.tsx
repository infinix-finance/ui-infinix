import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box, Typography as Typo } from "@mui/material";

const Label = ({ children }: { children: React.ReactNode }) => (
  <Typo color="#bbbbbb">{children}</Typo>
);

const TypeGuide: React.FC = () => {
  const boxStyles = {
    display: "flex",
    gap: 3,
    alignItems: "center",
    border: "1px dotted gray",
    borderRadius: "5px",
    p: 2,
    m: 1,
  };

  return (
    <>
      <Box>
        <Box sx={boxStyles}>
          <Label>h1</Label>
          <Typo variant="h1">The quick brown fox jumps over the lazy dog</Typo>
        </Box>
        <Box sx={boxStyles}>
          <Label>h2</Label>
          <Typo variant="h2">The quick brown fox jumps over the lazy dog</Typo>
        </Box>
        <Box sx={boxStyles}>
          <Label>h3</Label>
          <Typo variant="h3">The quick brown fox jumps over the lazy dog</Typo>
        </Box>
        <Box sx={boxStyles}>
          <Label>h4</Label>
          <Typo variant="h4">The quick brown fox jumps over the lazy dog</Typo>
        </Box>
        <Box sx={boxStyles}>
          <Label>h5</Label>
          <Typo variant="h5">The quick brown fox jumps over the lazy dog</Typo>
        </Box>
        <Box sx={boxStyles}>
          <Label>h6</Label>
          <Typo variant="h6">The quick brown fox jumps over the lazy dog</Typo>
        </Box>
        <Box sx={boxStyles}>
          <Label>subtitle1</Label>
          <Typo variant="subtitle1">
            The quick brown fox jumps over the lazy dog
          </Typo>
        </Box>
        <Box sx={boxStyles}>
          <Label>body1</Label>
          <Typo variant="body1">
            The quick brown fox jumps over the lazy dog
          </Typo>
        </Box>
        <Box sx={boxStyles}>
          <Label>body2</Label>
          <Typo variant="body2">
            The quick brown fox jumps over the lazy dog
          </Typo>
        </Box>
        <Box sx={boxStyles}>
          <Label>body3</Label>
          <Typo variant="body3">
            The quick brown fox jumps over the lazy dog
          </Typo>
        </Box>
        <Box sx={boxStyles}>
          <Label>buttonLarge</Label>
          <Typo variant="buttonLarge">
            The quick brown fox jumps over the lazy dog
          </Typo>
        </Box>
        <Box sx={boxStyles}>
          <Label>buttonMedium</Label>
          <Typo variant="buttonMedium">
            The quick brown fox jumps over the lazy dog
          </Typo>
        </Box>
        <Box sx={boxStyles}>
          <Label>buttonSmall</Label>
          <Typo variant="buttonSmall">
            The quick brown fox jumps over the lazy dog
          </Typo>
        </Box>
        <Box sx={boxStyles}>
          <Label>caption</Label>
          <Typo variant="caption">
            The quick brown fox jumps over the lazy dog
          </Typo>
        </Box>
        <Box sx={boxStyles}>
          <Label>inputLabel</Label>
          <Typo variant="inputLabel">
            The quick brown fox jumps over the lazy dog
          </Typo>
        </Box>
        <Box sx={boxStyles}>
          <Label>helperText</Label>
          <Typo variant="helperText">
            The quick brown fox jumps over the lazy dog
          </Typo>
        </Box>
        <Box sx={boxStyles}>
          <Label>inputText</Label>
          <Typo variant="inputText">
            The quick brown fox jumps over the lazy dog
          </Typo>
        </Box>
      </Box>
    </>
  );
};

export default {
  title: "atoms/Typography",
  component: TypeGuide,
} as ComponentMeta<typeof TypeGuide>;

const Template: ComponentStory<typeof TypeGuide> = (args) => (
  <TypeGuide {...args} />
);

export const DefaultTypography = Template.bind({});
DefaultTypography.args = {};
