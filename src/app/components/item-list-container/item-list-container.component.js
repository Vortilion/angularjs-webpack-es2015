import template from './item-list-container.component.html';

export const ItemListContainerComponent = {
    template,
    controller: class ItemListContainerComponent {
        $onInit() {
            this.activeItems = [
                {name: 'foo', active: true},
                {name: 'bar', active: true}
            ];

            this.inactiveItems = [
                {name: 'foo', active: false},
                {name: 'bar', active: false}
            ];
        }

        switchStatus(item) {
            item.active = !item.active;
        }
    }
};
