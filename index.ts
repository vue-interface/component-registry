import ComponentRegistry from './src/ComponentRegistry';

function factory(components: {[key: string]: any} = {}): ComponentRegistry {
    return new ComponentRegistry(components);
}

export {
    factory,
    ComponentRegistry
};
