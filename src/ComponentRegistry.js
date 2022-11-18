import { paramCase } from "param-case";
export default class ComponentRegistry {
    /**
     * Create a new ComponentRegistry instance.
     */
    constructor(components = {}) {
        this.components = new Map;
        Object.entries(components).forEach(([key, value]) => {
            this.register(key, value);
        });
    }
    /**
     * Get a component by the given key.
     */
    get(key) {
        const match = this.components.get(key = paramCase(key));
        if (match) {
            return match;
        }
        throw new Error(`"${key}" has not been registered yet!`);
    }
    /**
     * Register a component with the given key.
     */
    register(key, value) {
        if (typeof key === 'object') {
            Object.entries(key).forEach(([key, module]) => {
                this.register(paramCase(key), module);
            });
            return this;
        }
        this.components.set(paramCase(key), value);
        return this;
    }
    /**
     * Remove a component with the given key.
     */
    remove(key) {
        this.components.delete(paramCase(key));
        return this;
    }
    /**
     * Reset the registry.
     */
    reset() {
        this.components = new Map;
        return this;
    }
}
