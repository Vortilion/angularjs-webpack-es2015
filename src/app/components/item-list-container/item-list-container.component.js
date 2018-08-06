import template from './item-list-container.component.html';

export const ItemListContainerComponent = {
    template,
    controller: class ItemListContainerComponent {
        constructor(itemListContainerService) {
            'ngInject';
            this.itemListContainerService = itemListContainerService;
        }
        $onInit() {
            this.activeItems = this.itemListContainerService.getItems().activeItems;
            this.inactiveItems = this.itemListContainerService.getItems().inactiveItems;
        }

        switchStatus(item) {
            item.active = !item.active;
        }
    }
};
