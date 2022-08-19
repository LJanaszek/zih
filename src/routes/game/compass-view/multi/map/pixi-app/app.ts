import * as PIXI from 'pixi.js';
import GameScreen from './screen';
import loadSprites from './utils/load-sprites';

type AppConfig = {
    assetsPath: string
}

export const MAP_WIDTH = 687;
export const MAP_HEIGHT = 938;

export default class App extends PIXI.Application {

    constructor(private config: AppConfig) {
        super({
            backgroundAlpha: 1,
            backgroundColor: 0xDFD7CD,
            antialias: true
        });

        this.renderer.plugins.interaction.autoPreventDefault = false;
        this.renderer.view.style.touchAction = 'auto';

        loadSprites(this, [
            ['map', `${config.assetsPath}map.png`],
            ['pinezka', `${config.assetsPath}pinezka.png`],
        ]).then(() => {
            this.initApp();
        });

        this.renderer.on('resize', () => {
            this.onResize();
        })
    }

    private gameScreen?: GameScreen;

    private initApp() {
        this.gameScreen = new GameScreen(this);

        this.stage.addChild(this.gameScreen);

        this.onResize();
    }

    private onResize() {

        if (this.gameScreen) {
            const appWidth = this.renderer.width;
            const appHeight = this.renderer.height;

            const appRatio = appWidth / appHeight;
            const mapRatio = MAP_WIDTH / MAP_HEIGHT;

            if (appRatio < mapRatio) {
                this.gameScreen?.scale.set(appWidth / MAP_WIDTH);
            } else {
                this.gameScreen?.scale.set(appHeight / MAP_HEIGHT);
            }

            this.gameScreen?.position.set(
                (appWidth - this.gameScreen.width) / 2,
                (appHeight - this.gameScreen.height) / 2,
            );
        }
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
