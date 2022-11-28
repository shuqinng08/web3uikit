import { CSSProperties } from 'styled-components';
import { Credentials } from '../Credentials';
import { Illustration } from '../Illustrations';
import { LinkTo } from '../LinkTo';
import { Typography } from '../Typography';

const testCustomNavEvent = (direction: string) => {
    const event = new Event(direction, { bubbles: true });
    document.dispatchEvent(event);
};

export const testStepData = [
    {
        title: 'Welcome to the Stepper',
        content: (
            <p>
                We hope you like the content stepper, another super useful tool
                from the <strong>Moralis web3uiKit</strong>
            </p>
        ),
    },
    {
        title: 'Learn more',
        content: (
            <div>
                <p>
                    If any button ID = next
                    <br />
                </p>
                <button id="next">next</button>
                <p>
                    It can be used to navigate
                    <br />
                </p>
            </div>
        ),
    },
    {
        title: 'Learn more',
        content: (
            <div>
                <p>
                    If any button ID = prev
                    <br />
                </p>
                <button id="prev">prev</button>
                <p>
                    It can be used to navigate too
                    <br />
                </p>
            </div>
        ),
    },
    {
        title: 'Heights',
        content: (
            <p>
                Stepper is set to 100% height so you can use a parent div to
                control its height and it will fill the space dynamically. This
                parent div is set to 450px height. This means the buttons stay
                fixed to the bottom in the same place always
            </p>
        ),
    },
    {
        title: 'Hope you enjoy',
        content: <p>you can pass any content, we hope you like the stepper</p>,
    },
];

export const noNavTestStepData = [
    {
        title: 'No Nav Buttons',
        content: (
            <div>
                <p>
                    If a button has ID = 'prev'
                    <br />
                    Or a button has ID = 'next'
                    <br />
                </p>
                <button id="prev">prev</button>
                <button id="next">next</button>
                <p>
                    It can be used to navigate
                    <br />
                </p>
            </div>
        ),
    },
    {
        title: 'No Nav Buttons',
        content: (
            <div>
                <p>
                    If a button has ID = 'prev'
                    <br />
                    Or a button has ID = 'next'
                    <br />
                </p>
                <button id="prev">prev</button>
                <button id="next">next</button>
                <p>
                    pretty cool, right?
                    <br />
                </p>
            </div>
        ),
    },
    {
        content: (
            <div>
                <p>
                    Also you can use <strong>custom events</strong>
                    <br />
                    <br />
                    <code>
                        {"const event = new Event('next', { bubbles: true });"}
                        <br />
                        {'document.dispatchEvent(event);'}
                    </code>
                    <br />
                    <strong>or</strong>
                    <br />
                    <code>
                        {"const event = new Event('prev', { bubbles: true });"}
                        <br />
                        {'document.dispatchEvent(event);'}
                    </code>
                    <br />
                    <br />
                </p>
                <button onClick={() => testCustomNavEvent('prev')}>
                    custom prev
                </button>
                <button onClick={() => testCustomNavEvent('next')}>
                    custom next
                </button>
                <p>
                    ta da!
                    <br />
                </p>
            </div>
        ),
    },
    {
        title: 'No Nav Buttons',
        content: (
            <div>
                <p>
                    If a button has ID = 'prev'
                    <br />
                    Or a button has ID = 'next'
                    <br />
                </p>
                <button id="prev">prev</button>
                <button id="next">next</button>
                <p>
                    pretty cool, right?
                    <br />
                </p>
            </div>
        ),
    },
];

const style: CSSProperties = {
    width: '100%',
    textAlign: 'left',
    display: 'block',
};

export const verticalTestData = [
    {
        content: (
            <div style={style}>
                <Typography variant="h3">
                    Take a look at the API reference
                </Typography>
                <LinkTo
                    text="See more in our documentation"
                    address=""
                    iconLayout="none"
                />
                <Illustration logo="chest" />
            </div>
        ),
        stepTitle: 'Take a look at the API reference',
    },
    {
        content: (
            <div style={style}>
                <Typography variant="h3">
                    Check our quickstart using JS SDK
                </Typography>
                <LinkTo
                    text="See more in our documentation"
                    address=""
                    iconLayout="none"
                />
                <Illustration logo="lazyNft" />
            </div>
        ),
        stepTitle: 'Check our quickstart using JS SDK',
    },
    {
        content: (
            <div style={style}>
                <Typography variant="h3">Copy Project Api Key</Typography>
                <Credentials text="some big secret" />
                <Illustration logo="lazyNft" />
            </div>
        ),
        stepTitle: 'Copy Project API Key',
    },
];
