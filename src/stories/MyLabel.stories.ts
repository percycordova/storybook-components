import { Meta, StoryObj } from "@storybook/react";
import { MyLabel } from "../components/MyLabel";

const meta = {
  title: "UI/labels/MyLabel",
  component: MyLabel,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    size: {
      control: {
        type: "inline-radio",
        options: ["normal", "h1", "h2", "h3"],
      },
    },
    color: {
      control: {
        type: "select",
        options: ["primary", "secondary", "tertiary"],
      },
    },
    fontColor: {
      control: "color",
    }
  },
} satisfies Meta<typeof MyLabel>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    label: "Basic Label",
    size: "h2",
    fontColor: "#182964",
    allCaps: false,
    color: "primary"
  },
};

export const AllCaps: Story = {
  args: {
    label: "All Caps",
    size: "normal",
    allCaps:true
  },
};

export const Secondary: Story = {
  args: {
    label: "Secondary label",
    color: "secondary",
    size: "h2",
    allCaps: false
  },
};

export const CustomColor: Story = {
  args: {
    label: "Custom label",
    fontColor: "#5517ac",
    color: "primary",
    allCaps: false
  },
};
