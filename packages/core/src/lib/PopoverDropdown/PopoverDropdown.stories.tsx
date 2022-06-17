import { ComponentStory, ComponentMeta } from '@storybook/react';
import { color } from '@web3uikit/styles';
import PopoverDropdown from './PopoverDropdown';
import PopoverElement from '../PopoverElement/PopoverElement';
import {
    Cog,
    HelpCircle,
    LifeRing,
    LogOut,
    Network,
    Server,
    Testnet,
} from '@web3uikit/icons';

export default {
    title: '5.Popup/Popover Dropdown',
    component: PopoverDropdown,
    subcomponents: { PopoverElement },
    argTypes: { onClick: { action: 'clicked' } },
} as ComponentMeta<typeof PopoverDropdown>;

const Template: ComponentStory<typeof PopoverDropdown> = (args) => (
    <div
        style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            margin: 0,
            minHeight: '100vh',
        }}
    >
        <PopoverDropdown {...args} />
    </div>
);

export const PopoverSelection = Template.bind({});
PopoverSelection.args = {
    position: 'bottom',
    children: [
        <PopoverElement
            key="0"
            height={50}
            width={260}
            text={'Testnet Server'}
            textSize={20}
            icon={<Testnet fill={color.white} fontSize={20} />}
            iconSize={30}
            backgroundColor={'transparent'}
            textColor={color.white}
            onClick={() => alert('Testnet Server')}
        />,
        <PopoverElement
            key="1"
            height={50}
            width={260}
            text={'Mainnet Server'}
            textSize={20}
            iconSize={30}
            icon={<Network fill={color.white} fontSize={20} />}
            backgroundColor={'transparent'}
            textColor={color.white}
            onClick={() => alert('Mainnet Server')}
        />,
        <PopoverElement
            key="2"
            height={50}
            width={260}
            text={'Local Devchain Server'}
            textSize={20}
            iconSize={30}
            backgroundColor={'transparent'}
            icon={<Server fill={color.white} fontSize={20} />}
            textColor={color.white}
            onClick={() => alert('Local Devchain Server')}
        />,
    ],
    parent: <HelpCircle key="3" fill={color.grey} fontSize={50} />,
};

export const PopoverCustomPosition = Template.bind({});
PopoverCustomPosition.args = {
    position: 'bottom',
    moveBody: -80,
    move: -80,
    children: [
        <PopoverElement
            key="0"
            height={50}
            width={260}
            text={'Testnet Server'}
            textSize={20}
            icon={<Testnet fill={color.white} fontSize={20} />}
            iconSize={30}
            backgroundColor={'transparent'}
            textColor={color.white}
            onClick={() => alert('Testnet Server')}
        />,
        <PopoverElement
            key="1"
            height={50}
            width={260}
            text={'Mainnet Server'}
            textSize={20}
            iconSize={30}
            icon={<Network fill={color.white} fontSize={20} />}
            backgroundColor={'transparent'}
            textColor={color.white}
            onClick={() => alert('Mainnet Server')}
        />,
        <PopoverElement
            key="2"
            height={50}
            width={260}
            text={'Local Devchain Server'}
            textSize={20}
            iconSize={30}
            backgroundColor={'transparent'}
            icon={<Server fill={color.white} fontSize={20} />}
            textColor={color.white}
            onClick={() => alert('Local Devchain Server')}
        />,
    ],
    parent: <HelpCircle key="3" fill={color.grey} fontSize={50} />,
};

export const PopoverSelectionUser = Template.bind({});
PopoverSelectionUser.args = {
    position: 'bottom',
    children: [
        <PopoverElement
            key="4"
            height={50}
            width={260}
            text={'Account Settings'}
            textSize={20}
            icon={<Cog fill={color.white} fontSize={20} />}
            iconSize={30}
            backgroundColor={'transparent'}
            textColor={color.white}
            onClick={() => alert('Account Settings')}
        />,
        <PopoverElement
            key="5"
            height={50}
            width={260}
            text={'Support Page'}
            textSize={20}
            iconSize={30}
            icon={<LifeRing fill={color.white} fontSize={20} />}
            backgroundColor={'transparent'}
            textColor={color.white}
            onClick={() => alert('Support Page')}
        />,
        <PopoverElement
            key="6"
            height={50}
            width={260}
            text={'Logout'}
            textSize={20}
            iconSize={30}
            backgroundColor={'transparent'}
            iconColor={color.red}
            icon={<LogOut fill={color.red} fontSize={20} />}
            textColor={color.red}
            onClick={() => alert('Logout')}
        />,
    ],
    parent: <HelpCircle key="7" fill={color.grey} fontSize={50} />,
};
