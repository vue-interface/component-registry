import ComponentRegistry from './src/ComponentRegistry';
declare function factory(components?: {
    [key: string]: any;
}): ComponentRegistry;
export { factory, ComponentRegistry };
