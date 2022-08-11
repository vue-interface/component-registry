import { paramCase } from "param-case";

export default class ComponentRegistry {
    components: Map<string,any>

    constructor(components: {[key: string]: any} = {}) {
        this.components = new Map;
        
        Object.entries(components).forEach(([key, value]) => {
            this.register(key, value);    
        });
    }

    /**
     * Get a component by the given key.
     * 
     * @param {string} key 
     * @returns {any}
     */
    get(key: string): any {
        const match = this.components.get(
            key = paramCase(key)
        );
        
        if(match) {
            return match;
        }

        throw new Error(`"${key}" has not been registered yet!`);
    }

    /**
     * Register a component with the given key.
     * 
     * @param {string|object} key 
     * @param {any} value
     * @returns {this}
     */
    register(key: string|object, value: any): this {
        if(typeof key === 'object') {
            Object.entries(key).forEach(([key, module]: [string, any]) => {
                this.register(paramCase(key), module);
            });

            return this;
        }
        
        this.components.set(paramCase(key), value);

        return this;
    }

    /**
     * Remove a component with the given key.
     * 
     * @param {string|object} key
     * @returns {this}
     */
    remove(key: string): this {
        this.components.delete(paramCase(key));

        return this;
    }

    /**
     * Reset the registry.
     * 
     * @returns {this}
     */
    reset(): this {
        this.components = new Map;

        return this;
    }

}