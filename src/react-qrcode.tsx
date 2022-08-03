import * as React from 'react';
import {
  toDataURL,
  toCanvas,
  QRCodeRenderersOptions,
  QRCodeToDataURLOptions,
} from 'qrcode';

import { mergeRefs } from './utils';

export interface ImageQRCode {
  text: string;
  options: QRCodeToDataURLOptions;
}

export const Image = React.forwardRef<HTMLImageElement, ImageQRCode>(
  (props, propsRef) => {
    const { text, options, ...rest } = props;
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

export interface CanvaseQRCode {
  text: string;
  options: QRCodeRenderersOptions;
}

export const Canvase = React.forwardRef<HTMLCanvasElement, CanvaseQRCode>(
  (props, propsRef) => {
    const { text, options, ...rest } = props;
    const canvaseRef = React.useRef(null);

    const ref = mergeRefs(canvaseRef, propsRef);

    React.useEffect(() => {
      if (canvaseRef.current) {
        toCanvas(canvaseRef.current, text, options, function(error: unknown) {
          if (error) {
            throw error;
          }
        });
      }
    }, [text, options]);

    return <canvas ref={ref} {...rest} />;
  }
);
