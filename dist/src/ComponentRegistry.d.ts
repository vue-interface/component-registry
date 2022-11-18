export default class ComponentRegistry {
    components: Map<string, any>;
    /**
     * Create a new ComponentRegistry instance.
     */
    constructor(components?: {
        [key: string]: any;
    });
    /**
     * Get a component by the given key.
     */
    get(key: string): any;
    /**
     * Register a component with the given key.
     */
    register(key: string | object, value: any): this;
    /**
     * Remove a component with the given key.
     */
    remove(key: string): this;
    /**
     * Reset the registry.
     */
    reset(): this;
}
