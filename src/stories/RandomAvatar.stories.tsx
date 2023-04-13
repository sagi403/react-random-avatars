import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { RandomAvatar } from "../components/RandomAvatar";

const meta: Meta<typeof RandomAvatar> = {
  title: "RandomAvatar",
  component: RandomAvatar,
};

export default meta;
type Story = StoryObj<typeof RandomAvatar>;

export const Primary: Story = {
  render: () => <RandomAvatar />,
};