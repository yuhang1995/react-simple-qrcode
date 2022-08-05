import * as React from 'react';
import {
    toDataURL,
    toCanvas,
    QRCodeRenderersOptions,
    QRCodeToDataURLOptions,
} from 'qrcode';

import { mergeRefs } from './utils';

export interface ImageProps {
    text: string;
    options?: QRCodeToDataURLOptions;
}

export const Image = React.forwardRef<HTMLImageElement, ImageProps>(
    (props, propsRef) => {
        const { text, options = {}, ...rest } = props;
        const inputRef = React.useRef(null);

        const ref = mergeRefs(inputRef, propsRef);

        const [src, setSrc] = React.useState('');

        React.useEffect(() => {
            if (inputRef.current) {
                toDataURL(text, options, function(error: unknown, url: string) {
                    if (error) {
                        throw error;
                    }
                    setSrc(url);
                });
            }
        }, [text, options]);

        return <img ref={ref} src={src} {...rest} />;
    }
);

export interface CanvasProps {
    text: string;
    options?: QRCodeRenderersOptions;
}

export const Canvas = React.forwardRef<HTMLCanvasElement, CanvasProps>(
    (props, propsRef) => {
        const { text, options = {}, ...rest } = props;
        const canvasRef = React.useRef(null);

        const ref = mergeRefs(canvasRef, propsRef);

        React.useEffect(() => {
            if (canvasRef.current) {
                toCanvas(canvasRef.current, text, options, function(
                    error: unknown
                ) {
                    if (error) {
                        throw error;
                    }
                });
            }
        }, [text, options]);

        return <canvas ref={ref} {...rest} />;
    }
);
