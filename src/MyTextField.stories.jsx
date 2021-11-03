import React from 'react';

import MyTextField from './MyTextField';
import myTheme from "./Theme";

export default {
    title: 'Example/MyTextField',
    component: MyTextField,
};

const Template = (args) => <MyTextField {...args} />

export const Component = Template.bind({});
Component.args = {
    theme: myTheme,
};
