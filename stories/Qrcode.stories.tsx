import React from 'react';
import { Meta } from '@storybook/react';
import { Image, Canvas } from '../src';

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

    return (
        <div style={{ width: '500px', height: '500px', background: 'gray', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Image
                text='https://github.com/yuhang1995/react-qrcode'
                options={{
                    type: 'image/jpeg',
                    margin: 3,
                    scale: 4,
                    width: 200,
                }}
            />
        </div>
    )
}

export const CanvasQrCode = () => {
    return (
        <div style={{ width: '500px', height: '500px', background: 'gray', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Canvas
                text='https://github.com/yuhang1995/react-qrcode'
                options={{
                    margin: 3,
                    scale: 4,
                    width: 200,
                }}
            />
        </div>
    )
}
