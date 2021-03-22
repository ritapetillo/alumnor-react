import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import Modal, { IModalProps } from "../components/Modal";
import Login from "../components/Login";

export default {
  title: "Example/Modal",
  component: Modal,
} as Meta;

const Template: Story<IModalProps> = (args) => <Modal />;

export const SignUp = Template.bind({});
SignUp.args = {
  component: "signup",
};
