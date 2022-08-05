import React from 'react';
// import * as ReactDOM from 'react-dom/client';
import { Image, ImageProps, Canvas } from '../src';
import renderer from 'react-test-renderer';

const BASIC_PROPS = {
    text: 'https://github.com/yuhang1995/react-qrcode.git',
};

const BASIC_IMAGE: ImageProps = {
    ...BASIC_PROPS,
    options: {
        type: 'image/png',
    },
};

const BASIC_CANVAS = {
    ...BASIC_PROPS,
    options: {},
};

const TEST_TEXTS = [
    { text: '1234567890' },
    { text: 'single byte emoji ✅' },
    { text: 'double byte emoji 👌' },
    { text: 'four byte emoji 👌🏽' },
    { text: '你好' },
];

const TEST_LEVEL = ['L', 'H', 'M'];

describe('Image rendering', () => {
    test('renders basic Image correctly', () => {
        const tree = renderer.create(<Image {...BASIC_IMAGE} />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    test.each(TEST_TEXTS)('renders Image variation (%o) correctly', text => {
        const options = {
            ...BASIC_IMAGE,
            ...text,
        };
        const tree = renderer.create(<Image {...options} />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    test.each(TEST_LEVEL)('renders Image variation (%o) correctly', level => {
        const options = {
            ...BASIC_IMAGE,
            option: {
                errorCorrectionLevel: level,
            },
        };
        const tree = renderer.create(<Image {...options} />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});

describe('Canvas rendering', () => {
    test('renders basic Canvas correctly', () => {
        const tree = renderer.create(<Canvas {...BASIC_CANVAS} />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    test.each(TEST_TEXTS)('renders Canvas variation (%o) correctly', text => {
        const options = {
            ...BASIC_CANVAS,
            ...text,
        };
        const tree = renderer.create(<Canvas {...options} />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    test.each(TEST_LEVEL)('renders Canvas variation (%o) correctly', level => {
        const options = {
            ...BASIC_CANVAS,
            option: {
                errorCorrectionLevel: level,
            },
        };
        const tree = renderer.create(<Canvas {...options} />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
