import * as PIXI from 'pixi.js';
import { APP_HEIGHT, APP_HEIGHT_2, APP_WIDTH, APP_WIDTH_2, IScreen } from "../app";
import { SCREEN } from '../data';
import Bin from './bin';
import LabelItem from './label';

const SLIDER_HEIGHT = 230;

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
    nextPageButton = PIXI.Sprite.from('arrow');
    prevPageButton = PIXI.Sprite.from('arrow');

    helpButton = PIXI.Sprite.from('help');
    completeButton: PIXI.Text = new PIXI.Text('Zrobione')
    bg: PIXI.Sprite = PIXI.Sprite.from('drzewo');

    orientation: 'portrait' | 'landscape' = 'landscape';

    errorLayer = new PIXI.Container();

    constructor(private app: PIXI.Application, private onComplete: () => void, private onHelp: () => void) {
        super();

        this.sortableChildren = true;

        this.initBackground();

        this.errorLayer.zIndex = 100;
        this.addChild(this.errorLayer);

        SCREEN.ITEMS.forEach((i, index) => {
            const item = new LabelItem(i, app);

            this.items.push(item);
            this.addChild(item);

            item.on('new-position', ({ position, grabPosition }) => {
                const binData = this.bins.find(l => l.bin.containsPoint(grabPosition));

                if (binData) {

                    const binAnswers = SCREEN.ANSWERS.find(answ => {
                        return answ[0] === binData?.bin.id;
                    });

                    if (!binAnswers) {
                        item.resetToLastPosition();
                        return;
                    }

                    const answer = binAnswers[1].find(a => a.id === item.id)

                    if (answer) {
                        item.setPosition(
                            binData.bin.position.x + answer.position.x * binData.bin.width,
                            binData.bin.position.y + answer.position.y * binData.bin.height
                        );

                        this.pages.forEach(page => {
                            page.items = page.items.filter(i => i.id !== item.id);
                        });

                        binData.items.push(item);
                        item.transformToAnswer();

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
        this.bg.position.set(APP_WIDTH / 2, 0)

        this.addChild(this.bg);
    }

    private resizeBackground() {
        this.bg.scale.set((APP_HEIGHT - SLIDER_HEIGHT - 100) / this.bg.height);

        if (this.bg.width > APP_WIDTH) {
            this.bg.scale.set(APP_WIDTH / this.bg.width);
        }
    }

    private initBins() {
        SCREEN.BINS.forEach(data => {
            const bin = new Bin(data.label, this.errorLayer);
            bin.id = data.id;
            bin.zIndex = 10;

            bin.setSize(APP_WIDTH * .36, APP_WIDTH * .36 * .59);

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
                item.setPosition(300 + 0, (APP_HEIGHT - SLIDER_HEIGHT) + 45 + (70 + 3) * index);
            });
        });

        this.updatePageVisibility();


        this.nextPageButton.anchor.set(.5);
        this.nextPageButton.rotation = Math.PI / 2;

        this.nextPageButton.interactive = true;
        this.nextPageButton.buttonMode = true;

        this.addChild(this.nextPageButton);

        this.nextPageButton.on('pointerdown', () => {
            this.showNextPage();
        })

        this.prevPageButton.anchor.set(.5);
        this.prevPageButton.rotation = -Math.PI / 2;

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

        this.helpButton.anchor.set(.5);

        this.helpButton.interactive = true;
        this.helpButton.buttonMode = true;

        console.log(this.helpButton.hitArea);


        this.addChild(this.helpButton);
        this.helpButton.on('pointerdown', () => {
            this.onHelp();
        });
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

    private checkComplete() {
        const isComplete = this.pages.every(p => p.items.length === 0);

        if (isComplete) {
            this.nextPageButton.visible = false;
            this.prevPageButton.visible = false;
            this.onComplete();
        }

        return isComplete;
    }

    isValid(): boolean {
        throw new Error('Method not implemented.');
    }
    reset(): void {
        throw new Error('Method not implemented.');
    }

    changeOrientation(orientation: 'portrait' | 'landscape') {
        let sliderBaseX = 0;
        let sliderCenterX = 0;
        let sliderCenterY = 0;
        let sliderBaseY = 0;
        let layoutColumnCount = 0;
        let columnWidth = 0;
        let helpX = 0;
        let helpY = 0;

        if (orientation === 'portrait') {
            layoutColumnCount = 1;

            columnWidth = APP_WIDTH / layoutColumnCount;

            sliderBaseX = 0;
            sliderBaseY = APP_HEIGHT - SLIDER_HEIGHT - 100;
            sliderCenterX = APP_WIDTH / 2;
            sliderCenterY = sliderBaseY + SLIDER_HEIGHT / 2;
            sliderCenterX = APP_WIDTH / 2;

            helpX = APP_WIDTH / 2;
            helpY = APP_HEIGHT - 50;
        }

        if (orientation === 'landscape') {
            layoutColumnCount = 2;
            columnWidth = APP_WIDTH_2 / layoutColumnCount;

            sliderBaseY = APP_HEIGHT_2 - SLIDER_HEIGHT;
            sliderBaseX = APP_WIDTH_2 / 2;
            sliderCenterX = APP_WIDTH_2 * .75;
            sliderCenterY = APP_HEIGHT_2 / 2;

            helpX = APP_WIDTH_2 * .75;
            helpY = APP_HEIGHT_2 * .8;

        }

        this.prevPageButton.position.set(sliderBaseX + 40, sliderCenterY);
        this.completeButton.position.set(sliderBaseX + columnWidth / 2, sliderCenterY);
        this.nextPageButton.position.set(sliderBaseX + columnWidth - 40, sliderCenterY);

        this.helpButton.position.set(helpX, helpY);

        this.pages.forEach(p => {
            p.items.forEach((item, index) => {
                item.setPosition(sliderCenterX, (sliderCenterY - SLIDER_HEIGHT/2) + 45 + (70 + 3) * index);
            });
        });
    }
}
