import React from 'react';
import { Meta } from '@storybook/react';
import { Image, Canvase } from '../src';

const meta: Meta = {
    title: 'Welcome',
    component: Image,
    argTypes: {
        children: {
            control: {
                type: 'text',
            },
        },
    },
    parameters: {
        controls: { expanded: true },
    },
};

export default meta;

export const Base = () => {
    // const ref = React.useRef<HTMLImageElement>(null)
    const ref = React.createRef<HTMLImageElement>()

    return (
        <div style={{ width: '500px', height: '500px', background: 'gray', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Test />
            <Image
                ref={ref}
                text='https://github.com/bunlong/next-qrcode'
                options={{
                    type: 'image/jpeg',
                    // rendererOpts: {
                    //     quality: 0.3,
                    // },
                    margin: 3,
                    scale: 4,
                    width: 200,
                    // color: {
                    //     dark: '#010599FF',
                    //     light: '#FFBF60FF',
                    // },
                }}
            />
        </div>
    )
}
export const CanvaseQrCode = () => {

    return (
        <div style={{ width: '500px', height: '500px', background: 'gray', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Canvase
                text='https://github.com/bunlong/next-qrcode'
                options={{
                    margin: 3,
                    scale: 4,
                    width: 200,

                }}
            />
        </div>
    )
}


const Test = React.forwardRef<HTMLButtonElement, {}>(function Test(_, ref) {

    return <button ref={ref}>+++</button>
})
