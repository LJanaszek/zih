import { GlowFilter } from '@pixi/filter-glow';
import * as PIXI from 'pixi.js';
import { Graphics } from 'pixi.js';
import { IScreen } from "../app";
import { MAP } from '../data';

const glowFilter = new GlowFilter({ distance: 15, outerStrength: 3 })

export default class GameScreen extends PIXI.Container implements IScreen {

    activePoints: string[] = [];
    inactivePoints: string[] = [];

    points: PIXI.Container[] = [];
    activePointId: string | null = null;


    constructor(private app: PIXI.Application) {
        super();

        this.sortableChildren = true;

        this.initMap();

        // this.interactive = true;

        // this.on('pointerdown', (e: PIXI.InteractionEvent) => {
        //     const gfx = new PIXI.Graphics();

        //     console.log(e);

        //     gfx.beginFill(0xff0000);
        //     gfx.drawCircle(e.data.global.x, e.data.global.y, 10);

        //     this.addChild(gfx);
        // })
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
                point.anchor.set(.5, 1);

                point.position.set(p.position.x, p.position.y);

                this.addChild(point);

                point.interactive = true;
                point.buttonMode = true;

                const hisBoxSize = point.height * 1.2;

                const rect = new PIXI.Rectangle(-hisBoxSize / 2, -hisBoxSize, hisBoxSize, hisBoxSize);

                // const gfx = new PIXI.Graphics();
                // gfx.beginFill(0xffff00);
                // gfx.drawRect(p.position.x + rect.x, p.position.y + rect.y, rect.width, rect.height);
                // this.addChild(gfx);

                point.hitArea = rect;

                point.on('pointerdown', () => {
                    this.emit('pointer-clicked', p.id);
                });

                if (p.id === this.activePointId) {
                    point.filters = [
                        glowFilter
                    ]
                }

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

    setActivePoint(id: string | null) {
        this.activePointId = id;
        this.updatePoints();
    }
}
