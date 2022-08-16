import * as PIXI from 'pixi.js';
import { IScreen } from "../app";

export default class GameScreen extends PIXI.Container implements IScreen {

    constructor(private app: PIXI.Application) {
        super();
    }

    isValid(): boolean {
        throw new Error('Method not implemented.');
    }
    reset(): void {
        throw new Error('Method not implemented.');
    }
}
