import template from './item-list.component.html';

export const ItemListComponent = {
    template,
    bindings: {
        title: '@',
        items: '=',
        onClick: '&'
    },
    controller: class ItemListComponent {

    }
};


