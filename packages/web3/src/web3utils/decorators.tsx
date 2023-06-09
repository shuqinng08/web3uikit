import { useEffect } from 'react';
import { MoralisProvider, useMoralis } from 'react-moralis';
import { DecoratorFn } from '@storybook/react';
import { default as MoralisType } from 'moralis/types';
let MORALIS_APP_ID: string | null | undefined = null;
let MORALIS_SERVER_URL: string | null | undefined = null;

if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
    //@ts-ignore
    MORALIS_APP_ID = import.meta.env.STORYBOOK_MORALIS_APPLICATION_ID;
    //@ts-ignore
    MORALIS_SERVER_URL = import.meta.env.STORYBOOK_MORALIS_SERVER_URL;
} else {
    MORALIS_APP_ID = process.env.STORYBOOK_MORALIS_APPLICATION_ID;
    MORALIS_SERVER_URL = process.env.STORYBOOK_MORALIS_SERVER_URL;
}

export const moralisContext: DecoratorFn = (storyFn) => {
    const Web3Initialize = () => {
        const {
            enableWeb3,
            isAuthenticated,
            isWeb3Enabled,
            isWeb3EnableLoading,
            isInitialized,
        } = useMoralis();

        useEffect(() => {
            if (!isInitialized) return;
            const provider = window.localStorage.getItem(
                'provider',
            ) as MoralisType.Web3ProviderType;
            if (isAuthenticated && !isWeb3Enabled && !isWeb3EnableLoading) {
                enableWeb3({ provider });
            }
        }, [
            isAuthenticated,
            isWeb3Enabled,
            isInitialized,
            isWeb3EnableLoading,
        ]);

        return null;
    };

    return (
        <>
            {MORALIS_APP_ID && MORALIS_SERVER_URL ? (
                <MoralisProvider
                    appId={MORALIS_APP_ID}
                    serverUrl={MORALIS_SERVER_URL}
                >
                    {storyFn()}
                    <Web3Initialize />
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
