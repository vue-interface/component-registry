import { paramCase } from "param-case";

export default class ComponentRegistry {

    constructor(components = {}) {
        this.components = {};
        
        Object.entries(components).forEach(([key, value]) => {
            this.register(key, value);    
        });
    }

    validate(value) {
        if(typeof value === 'object' || typeof value === 'function') {
            return value;
        }

        throw new Error(
            `Invalid data type \`${typeof value}\`. Should be type \`object\` or \`function\`.`
        );
    }

    get(name) {
        const match = this.components[
            name = paramCase(name)
        ];
        
        if(match) {
            return match;
        }

        throw new Error(`"${name}" has not been registered yet!`);
    }

    register(name, value) {
        if(typeof name === 'object') {
            Object.entries(name).forEach(([name, module]) => {
                this.register(paramCase(name), module);
            });

            return this;
        }

        this.components[paramCase(name)] = this.validate(value);

        return this;
    }

    remove(name) {
        delete this.components[paramCase(name)];

        return this;
    }

    reset() {
        this.components = {};

        return this;
    }

}