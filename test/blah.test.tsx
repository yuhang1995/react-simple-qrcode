import React from 'react';
// import * as ReactDOM from 'react-dom/client';
import { Base } from '../stories/Qrcode.stories';
import renderer from 'react-test-renderer';


describe('Base', () => {
    it('renders without crashing', () => {
        //         const div = document.createElement('div');
        //         const root = ReactDOM.createRoot(div);
        //         root.render(<Base />);
        //         root.unmount();
        const component = renderer.create(
            <Base />,
        );

        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();

        // // manually trigger the callback
        // renderer.act(() => {
        //     tree.props.onMouseEnter();
        // });
        // // re-rendering
        // tree = component.toJSON();
        // expect(tree).toMatchSnapshot();

        // // manually trigger the callback
        // renderer.act(() => {
        //     tree.props.onMouseLeave();
        // });
        // re-rendering
        tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});

