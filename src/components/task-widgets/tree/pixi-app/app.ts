import * as PIXI from 'pixi.js';
import GameScreen from './screen';
import loadSprites from './utils/load-sprites';

type AppConfig = {
    assetsPath: string,
    onComplete(): void
}

export const APP_WIDTH = 590;
export const APP_HEIGHT = 900;

export const APP_WIDTH_2 = 1180;
export const APP_HEIGHT_2 = 682;

export default class App extends PIXI.Application {

    screenOrientation?: 'portrait' | 'landscape';

    constructor(private config: AppConfig) {
        super({
            backgroundAlpha: 0,
            // backgroundColor: 0xDFD7CD,
            // backgroundColor: 0xffffff,

            width: APP_WIDTH,
            height: APP_HEIGHT,
            antialias: true
        });

        this.renderer.plugins.interaction.autoPreventDefault = false;
        this.renderer.view.style.touchAction = 'auto';

        loadSprites(this, [
            ['drzewo', `${this.config.assetsPath}drzewo.jpg`],
            ['arrow', `${this.config.assetsPath}arrow.png`],
            ['x', `${this.config.assetsPath}x.png`]
            // ['t-101', `${this.config.assetsPath}t-101.json`]
        ]).then(() => {
            this.initApp();
        });

        window.addEventListener('resize', () => this.onResize());
    }

    private gameScreen?: GameScreen;

    private initApp() {
        this.gameScreen = new GameScreen(this, this.config.onComplete);
        this.gameScreen?.changeOrientation('landscape');

        this.onResize();

        this.stage.addChild(this.gameScreen);
    }

    isValid() {
        return this.gameScreen?.isValid() || false;
    }

    markInvalid() {
    }

    reset() {
        this.gameScreen?.reset();
    }

    onResize() {
        const wW = window.innerWidth;
        const wH = window.innerHeight;

        console.log('onResize', this.screenOrientation, wW < wH, {wW, wH});

        if (this.screenOrientation !== 'portrait' && wW < wH) {
            console.log('change to portrait')
            this.screenOrientation = 'portrait';
            this.renderer.resize(APP_WIDTH, APP_HEIGHT);
            this.gameScreen?.changeOrientation('portrait');
        }

        if (this.screenOrientation !== 'landscape' && wW > wH) {
            console.log('change to landscape')
            this.screenOrientation = 'landscape';
            this.renderer.resize(APP_WIDTH_2, APP_HEIGHT_2);
            this.gameScreen?.changeOrientation('landscape');
        }

        console.log('POST onResize', this.screenOrientation);
    }

    public destroy(x: boolean) {
        super.destroy(x);
    }
}


export interface IScreen {
    isValid(): boolean,
    reset(): void
}
