import angular from 'angular';
import { ItemListComponent } from './item-list.component';
import './item-list.scss';

export const ItemListModule = angular
    .module('itemList', [])
    .component('itemList', ItemListComponent)
    .name;

