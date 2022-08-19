import * as PIXI from 'pixi.js';
import { IScreen } from "../app";
import { MAP } from '../data';

export default class GameScreen extends PIXI.Container implements IScreen {

    activePoints: string[] = [];
    inactivePoints: string[] = [];

    points: PIXI.Container[] = [];


    constructor(private app: PIXI.Application) {
        super();

        this.sortableChildren = true;

        this.initMap();
    }

    private initMap() {
        const bg = PIXI.Sprite.from('map');

        this.addChild(bg);

        this.updatePoints();
    }

    private updatePoints() {
        console.log('updatePoints', this.activePoints);
        this.points.forEach(p => p.destroy());
        this.points.length = 0;

        MAP.POINTS
            .filter(p => this.activePoints.includes(p.id))
            .forEach((p) => {
                const point = PIXI.Sprite.from('pinezka');

                point.position.set(p.position.x, p.position.y);

                this.addChild(point);

                point.interactive = true;
                point.buttonMode = true;

                point.on('pointerdown', () => {
                    this.emit('pointer-clicked', p.id);
                });

                this.points.push(point);
            });
    }

    isValid(): boolean {
        throw new Error('Method not implemented.');
    }
    reset(): void {
        throw new Error('Method not implemented.');
    }



    setPoints(active: string[], inactive: string[]) {
        this.activePoints = active;
        this.inactivePoints = inactive;

        this.updatePoints();
    }
}
