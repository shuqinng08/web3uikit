import { ComponentStory, ComponentMeta } from '@storybook/react';
import Accordion from './Accordion';
import { NewComp } from '../NewComp';
import { Typography } from '../Typography';
import { ChevronDown, ChevronUp } from '@web3uikit/icons';
import { useState } from 'react';

export default {
    title: '3.Layout/Accordion',
    component: Accordion,
} as ComponentMeta<typeof Accordion>;

const Template: ComponentStory<typeof Accordion> = (args) => (
    <Accordion {...args} />
);

export const FullDemo = Template.bind({});
FullDemo.args = {
    children: [<NewComp key={'unique-id'} textOn="hello" textOff="bye!" />],
    isExpanded: false,
    hasLockIcon: true,
    id: 'accordion',
    subTitle: 'the sub title',
    tagText: 'Tag!',
    theme: 'blue',
    title: 'Accordion',
};

export const Default = Template.bind({});
Default.args = {
    children: [<NewComp key={'unique-id'} textOn="hello" textOff="bye!" />],
    id: 'accordion',
    title: 'Accordion',
};

export const HasSubtitle = Template.bind({});
HasSubtitle.args = {
    children: [<NewComp key={'unique-id'} textOn="hello" textOff="bye!" />],
    id: 'accordion',
    subTitle: 'the sub title',
    title: 'Accordion Title',
};

export const HasTag = Template.bind({});
HasTag.args = {
    children: [<NewComp key={'unique-id'} textOn="hello" textOff="bye!" />],
    id: 'accordion',
    tagText: 'Tag!',
    title: 'Accordion Title',
};

export const HasIcon = Template.bind({});
HasIcon.args = {
    children: [<NewComp key={'unique-id'} textOn="hello" textOff="bye!" />],
    id: 'accordion',
    hasLockIcon: true,
    title: 'Accordion Title',
};

export const Expanded = Template.bind({});
Expanded.args = {
    children: [<NewComp key={'unique-id'} textOn="hello" textOff="bye!" />],
    id: 'accordion',
    isExpanded: true,
    title: 'Expanded by default',
};

export const ThemeColor = Template.bind({});
ThemeColor.args = {
    children: [<NewComp key={'unique-id'} textOn="hello" textOff="bye!" />],
    id: 'accordion',
    theme: 'green',
    title: 'Theme is green',
};

const TestComponent = () => {
    const [content, setContent] = useState('');
    return (
        <div style={{ padding: '20px 40px' }}>
            <p>{content}</p>
            <button
                onClick={() =>
                    setContent(
                        (prev) =>
                            prev +
                            `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore repudiandae incidunt sint. Voluptates similique corrupti aut, ab quos minima natus quidem unde officiis, placeat facilis necessitatibus molestias vitae cum! Mollitia!`,
                    )
                }
            >
                Click Here
            </button>
        </div>
    );
};

export const CustomAccordion = Template.bind({});
CustomAccordion.args = {
    children: [
        <NewComp key={'unique-id'} textOn="hello" textOff="bye!" />,
        <TestComponent />,
    ],
    id: 'accordion',
    title: <Typography variant="h1">This is custom title</Typography>,
    subTitle: (
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <Typography variant="body16">66%</Typography>
            <div>
                <Typography variant="body16">Some Desc</Typography>
                <br />
                <Typography variant="caption14">Some Desc Body</Typography>
            </div>
        </div>
    ),
    icon: {
        open: <ChevronUp width={22} height={22} />,
        close: <ChevronDown width={22} height={22} />,
    },
    iconLayout: 'trailing',
};
