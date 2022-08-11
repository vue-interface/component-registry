import ComponentRegistry from './src/ComponentRegistry';

export function factory(...args) {
    return new ComponentRegistry(...args);
}

export {
    ComponentRegistry
};