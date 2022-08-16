import * as PIXI from 'pixi.js';
import { IScreen } from "../app";
import { SCREEN } from '../data';
import Bin from './bin';
import LabelItem from './label';

export default class GameScreen extends PIXI.Container implements IScreen {

    bins: Bin[] = [];
    items: LabelItem[] = [];

    pages: {
        items: LabelItem[]
    }[] = [];

    activePage = 0;
    nextPageButton: PIXI.Text;
    prevPageButton: PIXI.Text;
    completeButton: PIXI.Text;

    constructor(private app: PIXI.Application, private onComplete: () => void) {
        super();

        SCREEN.ITEMS.forEach((i, index) => {
            const item = new LabelItem(i, app);

            item.setPosition(100, 100 + index * 40);

            this.items.push(item);

            item.on('new-position', ({ position }) => {
                const bin = this.bins.find(l => l.containsPoint(position));

                if (bin) {

                    const binAnswers = SCREEN.ANSWERS.find(answ => {
                        return answ[0] === bin.id;
                    });

                    if (!binAnswers) {
                        item.resetToLastPosition();
                        return;
                    }

                    const answer = binAnswers[1].find(a => a.id === item.id)

                    if (answer) {
                        item.setPosition(bin.position.x + answer.position.x, bin.position.y + answer.position.y);

                        this.pages.forEach(page => {
                            page.items = page.items.filter(i => i.id !== item.id);
                        });

                        if (!this.checkComplete()) {
                            if (this.pages[this.activePage].items.length === 0) {
                                this.showNextPage();
                            }
                        }


                    } else {
                        item.resetToLastPosition();
                        bin.markInvalid();
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

            this.bins.push(bin);

            this.addChild(bin);
        });

        SCREEN.PAGES.forEach((pageData, index) => {

            const data: { items: LabelItem[] } = {
                items: []
            }

            pageData.forEach((itemId, index) => {
                const item = this.items.find(i => i.id === itemId);

                if (item) {
                    item.setPosition(300 + 0, 600 + 40 * index);
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

        this.nextPageButton.position.set(600, 650);

        this.addChild(this.nextPageButton);

        this.nextPageButton.on('click', () => {
            this.showNextPage();
        })

        this.prevPageButton = new PIXI.Text('<<');

        this.prevPageButton.interactive = true;
        this.prevPageButton.buttonMode = true;

        this.prevPageButton.position.set(50, 650);

        this.addChild(this.prevPageButton);

        this.prevPageButton.on('click', () => {
            this.showPrevPage();
        })

        this.completeButton = new PIXI.Text('Zrobione');

        this.completeButton.interactive = true;
        this.completeButton.buttonMode = true;

        this.completeButton.position.set(50, 650);

        this.completeButton.visible = false;

        this.addChild(this.completeButton);

        this.completeButton.on('click', () => {
            this.onComplete();
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
