import { ComponentStory, ComponentMeta } from '@storybook/react';
import Hero from './Hero';
import { Button } from '../Button';
import { ArrowCircleRight } from '@web3uikit/icons';
import { color, gradientColors } from '@web3uikit/styles';
import { Typography } from '../Typography';
//@ts-ignore
import wizard from './wizard.svg';

export default {
    title: '4.UI/Hero',
    component: Hero,
} as ComponentMeta<typeof Hero>;

const Template: ComponentStory<typeof Hero> = (args) => <Hero {...args} />;

export const DemoWithImage = Template.bind({});
DemoWithImage.args = {
    rounded: '20px',
    align: 'right',
    backgroundColor: color.blue40,
    height: '200px',
    padding: '40px',
    children: (
        <>
            <Typography variant="h3" color={color.white}>
                Need Help?
            </Typography>
            <Typography variant="h1" color={color.white}>
                Looking to get started?
            </Typography>
            <Button
                text="Book a demo"
                icon={<ArrowCircleRight fill={color.white} fontSize={24} />}
                theme="custom"
                isTransparent={true}
                iconLayout="trailing"
                customize={{
                    backgroundColor: 'transparent',
                    border: '1px solid white',
                    color: color.white,
                }}
            />
        </>
    ),
    customImage: {
        url: wizard as string,
    },
};

export const Demo = Template.bind({});
Demo.args = {
    title: 'web3uiKit, my hero!',
    subTitle: 'Need Help?',
    padding: '40px',
    backgroundURL:
        'https://moralis.io/wp-content/uploads/2021/06/blue-blob-background-2.svg',
};

export const CustomHeight = Template.bind({});
CustomHeight.args = {
    title: '200px height hero',
    linearGradient: gradientColors.purpleToPink,
    backgroundURL:
        'https://moralis.io/wp-content/uploads/2021/06/blue-blob-background-2.svg',
    height: '200px',
    textColor: color.white,
};

export const DappHero = Template.bind({});
DappHero.args = {
    title: 'My First Dapp’s Database',
    backgroundURL:
        'https://moralis.io/wp-content/uploads/2021/06/blue-blob-background-2.svg',
    height: '176px',
    rounded: '20px',
    align: 'left',
    textColor: '#fff',
    children: (
        <Button
            text="Access Database"
            icon={<ArrowCircleRight />}
            theme="primary"
        />
    ),
};

export const CustomHero = Template.bind({});
CustomHero.args = {
    title: 'Custom hero title',
    subTitle: 'Custom hero subtitle',
    height: '200px',
    customize: {
        backgroundColor: color.blue70,
        color: color.white,
        borderRadius: '5px',
        border: '1px solid black',
        padding: '24px',
        margin: '20px',
    },
};
