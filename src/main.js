import Vue from 'vue';
import wrap from '@vue/web-component-wrapper';
import CellularAutomata from './components/CellularAutomata';

const CellularAutomataComponent = wrap(Vue, CellularAutomata);

window.customElements.define('cellular-automata', CellularAutomataComponent);