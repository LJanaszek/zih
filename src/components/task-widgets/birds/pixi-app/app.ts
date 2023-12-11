import * as PIXI from 'pixi.js';
import { BirdTaskState } from '..';
import { SCREEN } from './data';
import GameScreen from './screen';
import loadSprites from './utils/load-sprites';

type AppConfig = {
    assetsPath: string,
    onComplete(): void
    onGameStateChanged(data: BirdTaskState): void
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
        ]).then(() => {
            this.initApp();
        })
    }

    private gameScreen?: GameScreen;

    private initApp() {
        this.gameScreen = new GameScreen(this, this.config.onComplete);

        this.gameScreen.on('update-game-state', (data) => {
            this.config.onGameStateChanged(data);
        })

        this.config.onGameStateChanged({
            birdCount: SCREEN.ITEMS.length,
            findedBirdCount: 0,
            isComplete: false
        })

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
