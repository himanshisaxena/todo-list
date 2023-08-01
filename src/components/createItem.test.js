/**
 * @jest-environment jsdom
 */

import createItems from './createItem.js';

describe('create a item component ', () => {
    test('text -> test', () => {
        const item = createItems({ text: 'test' });
        expect(item.nodeName).toEqual('DIV');
        expect(item.childElementCount).toEqual(2);
        expect(item.children[0].nodeName).toEqual('P');
        expect(item.children[0].innerHTML).toEqual('test');
        expect(item.children[1].nodeName).toEqual('DIV');
        expect(item.children[1].children[0].nodeName).toEqual('BUTTON');
    });
});
