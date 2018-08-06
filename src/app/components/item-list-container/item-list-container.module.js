import angular from 'angular';
import { ItemListContainerComponent } from './item-list-container.component';
import { ItemListContainerService } from '../item-list-container/item-list-container.service';
import './item-list-container.scss';

export const ItemListContainerModule = angular
    .module('itemListContainer', [])
    .component('itemListContainer', ItemListContainerComponent)
    .service('itemListContainerService', ItemListContainerService)
    .name;

