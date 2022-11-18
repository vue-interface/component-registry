import ComponentRegistry from './src/ComponentRegistry';
function factory(components = {}) {
    return new ComponentRegistry(components);
}
export { factory, ComponentRegistry };
