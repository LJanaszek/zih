import * as PIXI from 'pixi.js';
import { APP_HEIGHT, APP_WIDTH, IScreen } from "../app";
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
    completeButton: PIXI.Text = new PIXI.Text('Zrobione')
    bg: PIXI.Sprite = PIXI.Sprite.from('drzewo');

    errorLayer = new PIXI.Container();

    constructor(private app: PIXI.Application, private onComplete: () => void) {
        super();

        this.sortableChildren = true;

        this.initBackground();

        this.errorLayer.zIndex = 100;
        this.addChild(this.errorLayer);

        SCREEN.ITEMS.forEach((i, index) => {
            const item = new LabelItem(i, app);

            this.items.push(item);

            item.on('new-position', ({ position, grabPosition }) => {
                const  binData = this.bins.find(l => l.bin.containsPoint(grabPosition));

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
        this.bg.scale.set((APP_HEIGHT - SLIDER_HEIGHT) / this.bg.height);

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

        this.prevPageButton.position.set(40, APP_HEIGHT - (SLIDER_HEIGHT / 2));
        this.completeButton.position.set(APP_WIDTH / 2, APP_HEIGHT - (SLIDER_HEIGHT / 2));
        this.nextPageButton.position.set(APP_WIDTH - 40, APP_HEIGHT - (SLIDER_HEIGHT / 2));
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
}
