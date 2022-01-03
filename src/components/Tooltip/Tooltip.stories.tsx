import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Tooltip from "./Tooltip";

export default {
	title: "Popup/Tooltip",
	component: Tooltip,
} as ComponentMeta<typeof Tooltip>;


const Template: ComponentStory<typeof Tooltip> = (args) => <Tooltip {...args} />;

export const Regular = Template.bind({});
Regular.args = {
	text: "This is a text inside a tooltip",
	active: true,
};

export const RegularNoText = Template.bind({});
RegularNoText.args = {
	active: true,
};

export const RegularInactive = Template.bind({});
RegularInactive.args = {
	text: "This is a text inside a tooltip",
	active: false,
};