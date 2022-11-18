import ComponentRegistry from './src/ComponentRegistry';

export function factory(components: {[key: string]: any} = {}) {
    return new ComponentRegistry(components);
}

export {
    ComponentRegistry
};
