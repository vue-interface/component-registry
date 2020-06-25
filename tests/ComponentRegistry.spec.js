import ComponentRegistry from '..';
import { camelCase } from '@vue-interface/utils';

describe('ComponentRegistry.js', () => {
    it('works!', () => {
        const registry = new ComponentRegistry({
            a: {}
        });

        expect(registry.get('a')).toBeInstanceOf(Object);

        expect(() => registry.register('a', true)).toThrowError();

        expect(() => registry.get('b')).toThrowError();

        registry.register({b: {}});

        expect(registry.get('b')).toBeInstanceOf(Object);
        
        registry.remove('b');

        expect(() => registry.get('b')).toThrowError();

        registry.reset();

        expect(() => registry.get('a')).toThrowError();
    });
});