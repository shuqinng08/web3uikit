import React from 'react';
import { MoralisProvider } from 'react-moralis';
import { DecoratorFn } from '@storybook/react';

export const moralisContext: DecoratorFn = (Story) => {
    const MORALIS_APP_ID = process.env.STORYBOOK_MORALIS_APP_ID;
    const MORALIS_SERVER_URL = process.env.STORYBOOK_MORALIS_SERVER_URL;

    return (
        <>
            {MORALIS_APP_ID && MORALIS_SERVER_URL ? (
                <MoralisProvider
                    appId={MORALIS_APP_ID}
                    serverUrl={MORALIS_SERVER_URL}
                    initializeOnMount={true}
                >
                    <Story />
                </MoralisProvider>
            ) : (
                <>
                    <p>
                        This component requires your Moralis Server connection!
                    </p>
                    <p>
                        Rename .env.example to .env in the main folder and
                        provide your appId and serverUrl from Moralis{' '}
                        <a
                            href="https://docs.moralis.io/moralis-server/getting-started/create-a-moralis-server"
                            target="_blank"
                        >
                            (How to start Moralis Server)
                        </a>
                        <br />
                        Example: <br />
                        STORYBOOK_MORALIS_APPLICATION_ID = xxxxxxxxxxxx
                        <br />
                        STORYBOOK_MORALIS_SERVER_URL =
                        https://xxxxxx.grandmoralis.com:2053/server
                    </p>
                    <p>After adding .env run yarn start again</p>
                </>
            )}
        </>
    );
};
