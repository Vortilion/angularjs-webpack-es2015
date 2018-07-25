import template from './item.component.html';

export const ItemComponent = {
    template,
    bindings: {
        item: '=set',
        onClick: '&'
    },
    controller: class ItemComponent {

    }
};

