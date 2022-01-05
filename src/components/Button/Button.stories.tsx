import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Button from "./Button";

export default {
  title: "ReactComponentLibrary/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const HelloSweet = Template.bind({});

HelloSweet.args = {
  label: "Hello Sweet!",
};

export const ClickMe = Template.bind({});

ClickMe.args = {
  label: "Click here!",
};
