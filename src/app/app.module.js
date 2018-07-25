import angular from 'angular';
import { AppComponent } from './app.component';
import { ItemModule } from './components/item/item.module';
import { ItemListModule } from './components/item-list/item-list.module';
import { ItemListContainerModule } from './components/item-list-container/item-list-container.module';
// import './app.scss';


export const AppModule = angular
    .module('test.components', [
        ItemModule,
        ItemListModule,
        ItemListContainerModule
    ])
    .component('app', AppComponent)
    .name;

