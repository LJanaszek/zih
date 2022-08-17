import * as PIXI from 'pixi.js';
import { APP_HEIGHT, APP_WIDTH, IScreen } from "../app";
import { SCREEN } from '../data';
import Bin from './bin';
import LabelItem from './label';

const SLIDER_HEIGHT = 220;

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
    nextPageButton: PIXI.Text =  new PIXI.Text('>>');
    prevPageButton: PIXI.Text = new PIXI.Text('<<');
    completeButton: PIXI.Text = new PIXI.Text('Zrobione')
    bg: PIXI.Sprite = PIXI.Sprite.from('drzewo');

    constructor(private app: PIXI.Application, private onComplete: () => void) {
        super();

        this.initBackground();

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

        this.initBins();

        this.initControlls();
    }

    private initBackground() {
        this.bg.anchor.set(.5, 0);

        this.resizeBackground();
        this.bg.position.set(APP_WIDTH/2, 0)

        this.addChild(this.bg);
    }

    private resizeBackground() {
        this.bg.scale.set((APP_HEIGHT - SLIDER_HEIGHT) / this.bg.height);

        if (this.bg.width > APP_WIDTH) {
            this.bg.scale.set(APP_WIDTH / this.bg.width);
        }
    }

    private initBins() {
        SCREEN.BINS.forEach(data => {
            const bin = new Bin();
            bin.id = data.id;
            bin.zIndex = 10;

            bin.setSize(APP_WIDTH * .4, APP_WIDTH * .2);

            bin.position.set(data.position.x * APP_WIDTH, data.position.y * APP_HEIGHT);

            this.bins.push({
                bin,
                items: []
            });

            this.addChild(bin);
        });
    }

    private initControlls() {
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

        this.pages.forEach(p => {
            p.items.forEach((item, index) => {
                item.setPosition(300 + 0, (APP_HEIGHT - SLIDER_HEIGHT) + 20 + 40 * index);
            });
        });

        this.updatePageVisibility();

        this.nextPageButton.interactive = true;
        this.nextPageButton.buttonMode = true;

        this.addChild(this.nextPageButton);

        this.nextPageButton.on('pointerdown', () => {
            this.showNextPage();
        })

        this.prevPageButton = new PIXI.Text('<<');

        this.prevPageButton.interactive = true;
        this.prevPageButton.buttonMode = true;

        this.addChild(this.prevPageButton);

        this.prevPageButton.on('pointerdown', () => {
            this.showPrevPage();
        })

        this.completeButton.interactive = true;
        this.completeButton.buttonMode = true;

        this.completeButton.visible = false;

        this.addChild(this.completeButton);

        this.completeButton.on('pointerdown', () => {
            this.onComplete();
        });

        this.prevPageButton.position.set(50, APP_HEIGHT - (SLIDER_HEIGHT / 2));
        this.completeButton.position.set(APP_WIDTH / 2, APP_HEIGHT - (SLIDER_HEIGHT / 2));
        this.nextPageButton.position.set(APP_WIDTH - 50 - this.nextPageButton.width, APP_HEIGHT - (SLIDER_HEIGHT / 2));
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

        const appWidth = APP_WIDTH;
        const appHeight = APP_HEIGHT;

        console.log({ appWidth, appHeight });


        this.bg.position.set(appWidth / 2, 0);

        const bgNewHeight = appHeight - SLIDER_HEIGHT;

        const bgRealHeight = this.bg.height / this.bg.scale.y;
        const bgNewScale = bgNewHeight / bgRealHeight;

        this.bg.scale.set(bgNewScale);

        this.pages.forEach(p => {
            p.items.forEach((item, index) => {
                item.setPosition(300 + 0, (appHeight - SLIDER_HEIGHT) + 20 + 40 * index);
            });
        });

        const boxHeight = bgNewHeight * .3;
        const boxWidth = this.bg.width * .4;
        const boxMargin = bgNewHeight * .05;

        this.items.forEach(item => {
            item.setFontSize(bgNewHeight * .07);
        })

        this.bins.forEach(({ bin, items }, index) => {
            bin.setSize(boxWidth, boxHeight);

            switch (index) {
                case 0:
                    bin.position.set((appWidth / 2) - (boxWidth + boxMargin), boxMargin);
                    break;

                case 1:
                    bin.position.set((appWidth / 2) + boxMargin, boxMargin);
                    break;

                case 2:
                    bin.position.set((appWidth / 2) - (boxWidth + boxMargin), boxMargin * 2 + boxHeight);
                    break;

                case 3:
                    bin.position.set((appWidth / 2) + boxMargin, boxMargin * 2 + boxHeight);
                    break;
            }

            items.forEach((item, index) => {
                const position = SCREEN.ANSWERS
                    .find(a => a[0] === bin.id)?.[1]
                    .find(i => i.id === item.id)?.position;

                if (position) {
                    item.setPosition(bin.position.x + position.x, bin.position.y + position.y)
                    item.setFontSize(bgNewHeight * .003)
                }
            });
        });
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
