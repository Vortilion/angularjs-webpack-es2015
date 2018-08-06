import template from './item.component.html';

export const ItemComponent = {
    template,
    bindings: {
        item: '=set',
        onClick: '&'
    },
    controller: class ItemComponent {

        $onInit() {
            this.itemService.getItem('1').then(response => this.item = response);
        }
    }
};

