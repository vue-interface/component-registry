# ComponentRegistry

<%= pkg.description %>

[[toc]]

## Installation

NPM

    npm i <%= pkg.name %> --save

Yarn

    yard add <%= pkg.name %>

## Basic Usage

``` js
import ComponentRegistry from '@vue-interface/component-registry';

const registry = new ComponentRegistry({
    a: {}
});

registry.register({
    b: {},
    c: {}
});

registry.registry('d', {});

registry.remove('b');

registry.reset();
```