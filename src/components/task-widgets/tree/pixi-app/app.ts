import * as PIXI from 'pixi.js';
import GameScreen from './screen';
import loadSprites from './utils/load-sprites';

type AppConfig = {
    assetsPath: string,
    onComplete(): void,
    onHelp(): void
}

export const APP_WIDTH = 590;
export const APP_HEIGHT = 1000;

export const APP_WIDTH_2 = 1180;
export const APP_HEIGHT_2 = 682;

export default class App extends PIXI.Application {

    screenOrientation?: 'portrait' | 'landscape';

    constructor(private config: AppConfig) {
        super({
            backgroundAlpha: 0,
            width: APP_WIDTH,
            height: APP_HEIGHT,
            antialias: true
        });

        this.renderer.plugins.interaction.autoPreventDefault = false;
        this.renderer.view.style.touchAction = 'auto';

        loadSprites(this, [
            ['drzewo', `${this.config.assetsPath}drzewo.jpg`],
            ['arrow', `${this.config.assetsPath}arrow.png`],
            ['x', `${this.config.assetsPath}x.png`],
            ['help', `${this.config.assetsPath}pomoc.png`]
        ]).then(() => {
            this.initApp();
        });

        window.addEventListener('resize', this.onResize);
    }

    private gameScreen?: GameScreen;

    private initApp() {
        this.gameScreen = new GameScreen(this, this.config.onComplete, this.config.onHelp);
        this.stage.addChild(this.gameScreen);
        this.onResize();
    }

    isValid() {
        return this.gameScreen?.isValid() || false;
    }

    markInvalid() {
    }

    reset() {
        this.gameScreen?.reset();
    }

    onResize = () => {
        const wW = window.innerWidth;
        const wH = window.innerHeight;

        if (this.gameScreen) {
            if (this.screenOrientation !== 'portrait' && wW < wH) {
                this.screenOrientation = 'portrait';
                this.renderer.resize(APP_WIDTH, APP_HEIGHT);
                this.gameScreen.changeOrientation(this.screenOrientation);
            }

            if (this.screenOrientation !== 'landscape' && wW > wH) {
                this.screenOrientation = 'landscape';
                this.renderer.resize(APP_WIDTH_2, APP_HEIGHT_2);
                this.gameScreen.changeOrientation(this.screenOrientation);
            }
        }

    }

    public destroy(x: boolean) {
        super.destroy(x);

        window.removeEventListener('resize', this.onResize);
    }
}


export interface IScreen {
    isValid(): boolean,
    reset(): void
}
