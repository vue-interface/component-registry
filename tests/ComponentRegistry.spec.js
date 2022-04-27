import { ComponentRegistry } from '../index';

describe('ComponentRegistry.js', () => {
    it('works!', () => {
        const registry = new ComponentRegistry({
            SomeKey: {}
        });

        expect(registry.get('some-key')).toBeInstanceOf(Object);

        // expect(() => registry.register('SomeKey', true)).toThrowError();

        expect(() => registry.get('another-key')).toThrowError();

        registry.register('AnotherKey', {});

        expect(registry.get('another-key')).toBeInstanceOf(Object);
        
        registry.remove('another-key');

        expect(() => registry.get('another-key')).toThrowError();

        registry.reset();
    });
});