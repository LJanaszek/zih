import * as PIXI from 'pixi.js';
import { IScreen } from "../app";
import { SCREEN } from '../data';
import Bin from './bin';
import LabelItem from './label';

const positionInfo = {
    sliderHeight: 200
}

export default class GameScreen extends PIXI.Container implements IScreen {

    bins: {
        bin: Bin,
        items: LabelItem[]
    }[] = [];
    items: LabelItem[] = [];

    pages: {
        items: LabelItem[]
    }[] = [];

    activePage = 0;
    nextPageButton: PIXI.Text;
    prevPageButton: PIXI.Text;
    completeButton: PIXI.Text;
    bg: PIXI.Sprite;

    constructor(private app: PIXI.Application, private onComplete: () => void) {
        super();

        this.bg = PIXI.Sprite.from('drzewo');
        this.bg.anchor.set(.5, 0);

        this.addChild(this.bg);

        app.renderer.on('resize', () => {
            console.log('RESIZE!!!');
            this.updatePositions();
        });

        SCREEN.ITEMS.forEach((i, index) => {
            const item = new LabelItem(i, app);

            item.setPosition(100, 100 + index * 40);

            this.items.push(item);

            item.on('new-position', ({ position }) => {
                const binData = this.bins.find(l => l.bin.containsPoint(position));

                if (binData) {

                    const binAnswers = SCREEN.ANSWERS.find(answ => {
                        return answ[0] === binData.bin.id;
                    });

                    if (!binAnswers) {
                        item.resetToLastPosition();
                        return;
                    }

                    const answer = binAnswers[1].find(a => a.id === item.id)

                    if (answer) {
                        item.setPosition(binData.bin.position.x + answer.position.x, binData.bin.position.y + answer.position.y);

                        this.pages.forEach(page => {
                            page.items = page.items.filter(i => i.id !== item.id);
                        });

                        binData.items.push(item);

                        if (!this.checkComplete()) {
                            if (this.pages[this.activePage].items.length === 0) {
                                this.showNextPage();
                            }
                        }


                    } else {
                        item.resetToLastPosition();
                        binData.bin.markInvalid();
                    }

                } else {
                    item.resetToLastPosition();
                }
            });
        });

        SCREEN.BINS.forEach(data => {
            const bin = new Bin();
            bin.id = data.id;
            bin.zIndex = 10;

            bin.position.set(data.position.x, data.position.y);

            this.bins.push({
                bin,
                items: []
            });

            this.addChild(bin);
        });

        SCREEN.PAGES.forEach((pageData, index) => {

            const data: { items: LabelItem[] } = {
                items: []
            }

            pageData.forEach((itemId, index) => {
                const item = this.items.find(i => i.id === itemId);

                if (item) {
                    data.items.push(item);
                    this.addChild(item);
                }
            });

            this.pages.push(data);
        });

        this.updatePageVisibility();

        this.nextPageButton = new PIXI.Text('>>');

        this.nextPageButton.interactive = true;
        this.nextPageButton.buttonMode = true;

        this.addChild(this.nextPageButton);

        this.nextPageButton.on('click', () => {
            this.showNextPage();
        })

        this.prevPageButton = new PIXI.Text('<<');

        this.prevPageButton.interactive = true;
        this.prevPageButton.buttonMode = true;

        this.addChild(this.prevPageButton);

        this.prevPageButton.on('click', () => {
            this.showPrevPage();
        })

        this.completeButton = new PIXI.Text('Zrobione');

        this.completeButton.interactive = true;
        this.completeButton.buttonMode = true;

        this.completeButton.visible = false;

        this.addChild(this.completeButton);

        this.completeButton.on('click', () => {
            this.onComplete();
        });

        this.updatePositions();
    }

    showNextPage() {
        this.activePage = (this.activePage + 1) % this.pages.length;

        if (this.pages[this.activePage].items.length === 0) {
            this.showNextPage();
        } else {
            this.updatePageVisibility();
        }
    }

    showPrevPage() {
        this.activePage = (this.activePage + this.pages.length - 1) % this.pages.length;

        if (this.pages[this.activePage].items.length === 0) {
            this.showPrevPage();
        } else {
            this.updatePageVisibility();
        }
    }

    private updatePageVisibility() {
        this.pages.forEach((p, index) => {
            p.items.forEach(i => {
                i.visible = index === this.activePage;
            })
        });
    }

    private updatePositions() {

        const appWidth = this.app.renderer.width;
        const appHeight = this.app.renderer.height;

        console.log({ appWidth, appHeight });


        this.bg.position.set(appWidth / 2, 0);

        const bgNewHeight = appHeight - positionInfo.sliderHeight;

        const bgRealHeight = this.bg.height / this.bg.scale.y;
        const bgNewScale = bgNewHeight / bgRealHeight;

        this.bg.scale.set(bgNewScale);

        this.prevPageButton.position.set(50, appHeight - (positionInfo.sliderHeight / 2));
        this.completeButton.position.set(appWidth, appHeight - (positionInfo.sliderHeight / 2));
        this.nextPageButton.position.set(600, appHeight - (positionInfo.sliderHeight / 2));

        this.pages.forEach(p => {
            p.items.forEach((item, index) => {
                item.setPosition(300 + 0, (appHeight - positionInfo.sliderHeight) + 20 + 40 * index);
            });
        });

        const boxHeight = bgNewHeight * .3;
        const boxWidth = this.bg.width * .4;
        const boxMargin = bgNewHeight * .05;

        this.bins.forEach(({bin, items}, index) => {
            bin.setSize(boxWidth, boxHeight);

            switch (index) {
                case 0:
                    bin.position.set((appWidth/2) - (boxWidth + boxMargin), boxMargin);
                    break;

                case 1:
                    bin.position.set((appWidth/2) + boxMargin, boxMargin);
                    break;

                case 2:
                    bin.position.set((appWidth/2) - (boxWidth + boxMargin), boxMargin * 2 + boxHeight);
                    break;

                case 3:
                    bin.position.set((appWidth/2) + boxMargin, boxMargin * 2 + boxHeight);
                    break;
            }

            items.forEach((item, index) => {
                const position = SCREEN.ANSWERS
                    .find(a => a[0] === bin.id)?.[1]
                    .find(i => i.id === item.id)?.position;

                if (position) {
                    item.setPosition(bin.position.x + position.x, bin.position.y + position.y)
                }
            });
        });

        this.items.forEach(item => {
            item.setFontSize(boxWidth*.1);
        })
    }

    private checkComplete() {
        const isComplete = this.pages.every(p => p.items.length === 0);

        if (isComplete) {
            this.nextPageButton.visible = false;
            this.prevPageButton.visible = false;
            this.completeButton.visible = true;
        }

        return isComplete;
    }

    isValid(): boolean {
        throw new Error('Method not implemented.');
    }
    reset(): void {
        throw new Error('Method not implemented.');
    }
}
