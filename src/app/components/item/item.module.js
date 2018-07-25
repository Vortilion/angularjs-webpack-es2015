import angular from 'angular';
import { ItemComponent } from './item.component';
import './item.scss';

export const ItemModule = angular
    .module('item', [])
    .component('item', ItemComponent)
    .name;

