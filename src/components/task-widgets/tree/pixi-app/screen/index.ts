import * as PIXI from 'pixi.js';
import { IScreen } from "../app";
import { SCREEN } from '../data';
import Bin from './bin';
import LabelItem from './label';

export default class GameScreen extends PIXI.Container implements IScreen {

    constructor(private app: PIXI.Application) {
        super();

        SCREEN.ITEMS.forEach((i, index) => {
            const item = new LabelItem(i, app);

            item.position.set(100, 100 + index*40);

            this.addChild(item);
        });

        SCREEN.BINS.forEach(data => {
            const bin = new Bin();
            bin.id = data.id;
            bin.zIndex = 10;

            bin.position.set(data.position.x, data.position.y);

            // this.bins.push(bin);

            // this.answers.set(data.id, []);

            console.log('BIN???');

            this.addChild(bin);
        });
    }

    isValid(): boolean {
        throw new Error('Method not implemented.');
    }
    reset(): void {
        throw new Error('Method not implemented.');
    }
}
