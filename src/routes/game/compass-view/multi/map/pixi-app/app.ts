import * as PIXI from 'pixi.js';
import GameScreen from './screen';
import loadSprites from './utils/load-sprites';

type AppConfig = {
    assetsPath: string,
    onPointerClicked(id: string): void;
}

export const MAP_WIDTH = 529;
export const MAP_HEIGHT = 938;

export default class App extends PIXI.Application {

    constructor(private config: AppConfig) {
        super({
            backgroundAlpha: 1,
            backgroundColor: 0xDFD7CD,
            width: MAP_WIDTH,
            height: MAP_HEIGHT,
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

        this.gameScreen.on('pointer-clicked', (id) => {
            this.config.onPointerClicked(id);
        })

        this.stage.addChild(this.gameScreen);

        this.stage.emit('ready');

        this.onResize();
    }

    private onResize() {}

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

    setPoints(active: string[], inactive: string[]) {
        this.gameScreen?.setPoints(active, inactive);
    }

    setActivePoint(id: string | null) {
        this.gameScreen?.setActivePoint(id);
    }
}


export interface IScreen {
    isValid(): boolean,
    reset(): void
}
