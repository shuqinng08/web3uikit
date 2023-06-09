import React, { useEffect, useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import NftCard from './NftCard';
import { color } from '@web3uikit/styles';

export default {
    title: '4.UI/NftCard',
    component: NftCard,
} as ComponentMeta<typeof NftCard>;

const Template: ComponentStory<typeof NftCard> = (args) => (
    <NftCard {...args} />
);

export const Default = Template.bind({});
Default.args = {
    moralisApiResult: {
        token_address: '0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d',
        token_id: '4789',
        amount: '1',
        owner_of: '0x6682f185d982bd341a0e1dfccbc2562e3cb1eea7',
        token_hash: '61554743720b60143f35e7adcc2a6fc7',
        block_number_minted: '12346998',
        block_number: '15957801',
        transfer_index: [15957801, 92, 206, 0],
        contract_type: 'ERC721',
        name: 'BoredApeYachtClub',
        symbol: 'BAYC',
        token_uri:
            'https://ipfs.moralis.io:2053/ipfs/QmeSjSinHpPnmXmspMjwiXyN6zS4E9zccariGR3jxcaWtq/4789',
        metadata:
            '{"image":"ipfs://QmZcRZu2cMJG9KUSta6WTrRek647WSG5mJZLhimwbC2y56","attributes":[{"trait_type":"Background","value":"Aquamarine"},{"trait_type":"Fur","value":"Pink"},{"trait_type":"Eyes","value":"3d"},{"trait_type":"Mouth","value":"Bored"},{"trait_type":"Clothes","value":"Service"}]}',
        last_token_uri_sync: '2022-10-04T14:49:59.308Z',
        last_metadata_sync: '2022-10-04T14:50:00.573Z',
        minter_address: '0x8be13ff71224ad525f0474553aa7f8621b856bd4',
    },
    chain: 'Ethereum',
};

export const Custom = Template.bind({});
Custom.args = {
    moralisApiResult: {
        token_address: '0x2953399124f0cbb46d2cbacd8a89cf0599974963',
        token_id:
            '113461209507512867518933452141320285231135646094834536306130710983923277496520',
        amount: '96',
        owner_of: '0xfad8c4d1b26f280ca7a3f3f05e0fba1954e69c93',
        token_hash: '6a5c632686374a276c17510e45fa546f',
        block_number_minted: '27090571',
        block_number: '36819147',
        transfer_index: [36819147, 74, 250, 0],
        contract_type: 'ERC1155',
        name: 'OpenSea Collections',
        symbol: 'OPENSTORE',
        token_uri:
            'https://api.opensea.io/api/v2/metadata/matic/0x2953399124F0cBB46d2CbACD8A89cF0599974963/0xfad8c4d1b26f280ca7a3f3f05e0fba1954e69c930000000000001c00000000c8',
        metadata:
            '{"image":"https://lh3.googleusercontent.com/rp89xp0BIhvqaRPeSt-ONlBXyKb016HFAOr_f3HjkdQjBgcXmwZJXPafTlfft9qR6yKB7Ga7ycFtu2Oa4Aqder4_rBoKyMqL8b-e6Q","name":"Moralis Core Keycard","description":"The Core Team Keycard is used to identify a Moralis Core Team member.\\n\\nThe token is held proudly by Moralis developers, content creators, and supporting team members a like!\\n\\nKeep the hedgehog, push the flywheel together, be the movement: Moralis!","external_link":null,"animation_url":"https://openseauserdata.com/files/61af0e98bb91bee60234fcad25a9b343.mp4","traits":[]}',
        last_token_uri_sync: '2022-12-05T16:00:31.675Z',
        last_metadata_sync: '2022-12-05T16:00:34.932Z',
        minter_address: "ERC1155 tokens don't have a single minter",
        normalized_metadata: {
            name: 'Moralis Core Keycard',
            description:
                'The Core Team Keycard is used to identify a Moralis Core Team member.\n\nThe token is held proudly by Moralis developers, content creators, and supporting team members a like!\n\nKeep the hedgehog, push the flywheel together, be the movement: Moralis!',
            animation_url: null,
            external_link: null,
            image:
                'https://lh3.googleusercontent.com/rp89xp0BIhvqaRPeSt-ONlBXyKb016HFAOr_f3HjkdQjBgcXmwZJXPafTlfft9qR6yKB7Ga7ycFtu2Oa4Aqder4_rBoKyMqL8b-e6Q',
            attributes: [],
        },
    },
    chain: 'Polygon',
    customize: {
        backgroundColor: color.aero10,
        borderRadius: '10px',
        border: '2px solid black',
        margin: '50px',
        padding: '20px',
        fontSize: '16px',
        fontWeight: '700',
    },
    detailsBorder: 'none',
};
export const PalmNetworkNft = Template.bind({});
PalmNetworkNft.args = {
    moralisApiResult: {
        block_number: '',
        owner_of: '',
        transfer_index: [],
        token_address: '0x19d4f9a260af1d7e0e99a32dbe418956af875c25',
        token_id:
            '10082949885042994343756379319869424059266282382079623606537702675585376546605',
        amount: '1',
        token_hash: 'fffe8584415ba3cdc8f68d787bafe94e',
        block_number_minted: '2118553',

        contract_type: 'ERC1155',
        name: 'DC COMICS',
        symbol: 'DCD',
        token_uri:
            'https://ipfs.moralis.io:2053/ipfs/bafybeifnml5ackajmuz7ylmw6zxnpdydpuwiscxoi4kn2srgkrzjjglwiq',
        metadata:
            '{"name":"Val-Zod, Superman","type":"video","description":"With Kal-El brainwashed by Darkseid and now a malevolent supervillain, a brave champion must rise to face him - and that comes in the form of Val-Zod, the new Superman! In this extra-sized issue, Val-Zod finally accepts his role as the new Superman of Earth 2 as he faces the twisted, brutal original Superman.  Val-Zod\'s Superman graces a cover in Andy Kubert\'s 2014 cover of Earth 2 #25: Rise of a Superman.","image":"ipfs://bafybeidwamf4f2vtfs3ocbfvbvtlmelj2ysvn3vxx7pkxriktmtchqzpoy","properties":{"Character":"Superman","Tier":"Rare"}}',
        last_token_uri_sync: '2022-11-12T08:23:40.884Z',
        last_metadata_sync: '2022-11-12T08:24:27.705Z',
        minter_address: "ERC1155 tokens don't have a single minter",
    },
    chain: 'Palm',
    customize: {
        backgroundColor: color.aero10,
        borderRadius: '10px',
        border: '2px solid black',
        margin: '50px',
        padding: '20px',
        fontSize: '16px',
        fontWeight: '700',
    },
    detailsBorder: 'none',
};

export const ErrorNft = Template.bind({});
ErrorNft.args = {
    moralisApiResult: {
        block_number: '',
        owner_of: '',
        transfer_index: [],
        token_address: '0x19d4f9a260af1d7e0e99a32dbe418956af875c25',
        token_id:
            '86275255655979606840825330240032284343267514139596198785629754523673095289802',
        amount: '1',
        token_hash: 'ffffd87563e6c69ee9873dc05ad15369',
        block_number_minted: '2447532',

        contract_type: 'ERC1155',
        name: 'DC COMICS',
        symbol: 'DCD',
        token_uri:
            'https://ipfs.moralis.io:2053/ipfs/bafybeifyobjq4m4ab2thdvk5cc67dtwcdwrysqaxiogkcq5pvu7fcqpk2a',
        metadata:
            '{"name":"Harley Quinn","type":"video","description":"Harley Quinn and her henchmen - the Quinntets - are anxious to score some moolah in 2001\'s Harley Quinn #6 Who Wants to Rob A Millionaire? With Cover by Terry Dodson. Harley finds that being the leader of the pack isn\'t all it\'s cracked up to be. She figures the best way to keep the puppies at bay is to rob someone very rich. Who better than Bruce Wayne?","image":"https://ipfs.io/ipfs/QmWVwD9MSprkmiPt3cFCWGtEiaLisMp8QcxCMHMURBai3e","properties":{"Character":"Harley Quinn","Tier":"Rare"}}',
        last_token_uri_sync: '2022-12-30T11:53:47.083Z',
        last_metadata_sync: '2022-12-30T11:53:49.222Z',
        minter_address: "ERC1155 tokens don't have a single minter",
    },
    chain: 'Palm',
    customize: {
        backgroundColor: color.aero10,
        borderRadius: '10px',
        border: '2px solid black',
        margin: '50px',
        padding: '20px',
        fontSize: '16px',
        fontWeight: '700',
    },
    detailsBorder: 'none',
};
