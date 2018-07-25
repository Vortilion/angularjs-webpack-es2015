import angular from 'angular';
import { ItemListContainerComponent } from './item-list-container.component';
import './item-list-container.scss';

export const ItemListContainerModule = angular
    .module('itemListContainer', [])
    .component('itemListContainer', ItemListContainerComponent)
    .name;

