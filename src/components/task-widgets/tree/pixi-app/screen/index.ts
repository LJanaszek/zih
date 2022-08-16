import * as PIXI from 'pixi.js';
import { SCENARIO } from '../../../../../modules/game/scenario';
import { IScreen } from "../app";
import { SCREEN } from '../data';
import Bin from './bin';
import LabelItem from './label';

export default class GameScreen extends PIXI.Container implements IScreen {

    bins: Bin[] = [];
    items: LabelItem[] = [];

    constructor(private app: PIXI.Application) {
        super();

        SCREEN.ITEMS.forEach((i, index) => {
            const item = new LabelItem(i, app);

            item.setPosition(100, 100 + index*40);

            this.items.push(item);

            item.on('new-position', ({ position }) => {
                const bin = this.bins.find(l => l.containsPoint(position));

                if (bin) {

                    const binAnswers = SCREEN.ANSWERS.find(answ => {
                        return answ[0] == bin.id;
                    });

                    if (!binAnswers) {
                        item.resetToLastPosition();
                        return;
                    }

                    if (binAnswers[1].includes(item.id)) {
                        item.setPosition(bin.position.x, bin.position.y);
                    } else {
                        item.resetToLastPosition();
                    }

                } else {
                    item.resetToLastPosition();
                }
            })

            this.addChild(item);


        });

        SCREEN.BINS.forEach(data => {
            const bin = new Bin();
            bin.id = data.id;
            bin.zIndex = 10;

            bin.position.set(data.position.x, data.position.y);

            this.bins.push(bin);

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
