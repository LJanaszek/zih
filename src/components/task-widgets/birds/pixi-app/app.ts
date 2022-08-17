import * as PIXI from 'pixi.js';
import GameScreen from './screen';
import loadSprites from './utils/load-sprites';

type AppConfig = {
    assetsPath: string,
    onComplete(): void
}

export const APP_WIDTH = 800;
export const APP_HEIGHT = 590;

export default class App extends PIXI.Application {

    constructor(private config: AppConfig) {
        super({
            backgroundAlpha: 1,
            backgroundColor: 0xDFD7CD,
            width: APP_WIDTH,
            height: APP_HEIGHT,
            antialias: true
        });

        this.renderer.plugins.interaction.autoPreventDefault = false;
        this.renderer.view.style.touchAction = 'auto';

        loadSprites(this, [
            ['ulica', `${config.assetsPath}ulica.png`],
            ['bird1', `${config.assetsPath}bird1.png`],
            ['bird2', `${config.assetsPath}bird2.png`],
            ['bird3', `${config.assetsPath}bird3.png`],
            ['bird4', `${config.assetsPath}bird4.png`],
            ['bird5', `${config.assetsPath}bird5.png`],
            ['bird6', `${config.assetsPath}bird6.png`],
            ['bird7', `${config.assetsPath}bird7.png`],
            ['bird8', `${config.assetsPath}bird8.png`],
            ['bird9', `${config.assetsPath}bird9.png`],
            ['bird10', `${config.assetsPath}bird10.png`],
        ]).then(() => {
            this.initApp();
        })
    }

    private gameScreen?: GameScreen;

    private initApp() {
        this.gameScreen = new GameScreen(this, this.config.onComplete);

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

    public destroy(x: boolean) {
        super.destroy(x);
    }
}


export interface IScreen {
    isValid(): boolean,
    reset(): void
}
