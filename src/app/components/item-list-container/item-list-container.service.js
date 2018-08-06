export class ItemListContainerService {
    constructor($http) {
        'ngInject';
        this.$http = $http;

        this.API = process.env.API_URL;
    }

    getItems() {
        return {
            activeItems: [
                {name: 'foo', active: true},
                {name: 'bar', active: true}
            ],
            inactiveItems: [
                {name: 'foo', active: false},
                {name: 'bar', active: false}
            ]
        };
    }
}
