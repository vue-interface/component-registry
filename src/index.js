import ComponentRegistry from './ComponentRegistry';

function factory(...args) {
    return new ComponentRegistry(...args);
}

export {
    ComponentRegistry,
    factory
};