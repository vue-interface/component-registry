import ComponentRegistry from './src/ComponentRegistry';
export function factory(components = {}) {
    return new ComponentRegistry(components);
}
export { ComponentRegistry };
