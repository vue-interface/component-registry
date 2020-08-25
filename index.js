
export default class ComponentRegistry {

    constructor(components = {}) {
        this.components = components;
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
        if(this.components[name]) {
            return this.components[name];
        }

        throw new Error(`"${name}" has not been registered yet!`);
    }

    register(name, value) {
        if(typeof name === 'object') {
            Object.entries(name).forEach(([name, module]) => {
                this.register(name, module);
            });

            return this;
        }

        this.components[name] = this.validate(value);

        return this;
    }

    remove(name) {
        delete this.components[name];

        return this;
    }

    reset() {
        this.components = {};
    }

}