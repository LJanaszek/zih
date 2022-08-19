import * as PIXI from 'pixi.js';
import { ItemData } from '../data';
import { ColorOverlayFilter } from '@pixi/filter-color-overlay';

const invalidFilter = new ColorOverlayFilter(0xff0000, .45);

const LABEL_WIDTH = 445;
const LABEL_HEIGHT = 70;

export default class LabelItem extends PIXI.Container {
    public id: string;
    text: PIXI.Text;
    bg: PIXI.Graphics;
    constructor(private config: ItemData, private app: PIXI.Application) {
        super();

        this.id = config.id;

        const containerRect = new PIXI.Rectangle(-LABEL_WIDTH / 2, -LABEL_HEIGHT / 2, 445, 70);

        this.hitArea = containerRect

        this.bg = new PIXI.Graphics();

        this.bg.beginFill(0xDFD7CD, .0);
        this.bg.drawShape(containerRect);

        this.addChild(this.bg);

        this.interactive = true;
        this.buttonMode = true;

        this.text = new PIXI.Text(config.text);
        this.text.anchor.set(.5);
        this.text.style.fontSize = '45px';
        this.text.style.fontFamily = 'Gothic'
        this.text.style.fill =0x666699;


        this.addChild(this.text);

        this
            .on('pointerdown', this.onDragStart)
            .on('pointermove', this.onDragMove)
            .on('pointerup', this.onDragEnd)
            .on('pointerupoutside', this.onDragEnd)
    }

    private disableScrolling = (e: TouchEvent) => {
        if (this.dragging) {
            e.preventDefault();
        }
    }

    private grabData?: PIXI.InteractionEvent['data'] | null;
    private grabPoint?: PIXI.Point;
    private dragging = false;
    private lastPosition = new PIXI.Point();
    private lastScale = 1;

    private onDragStart(event: PIXI.InteractionEvent) {
        this.grabData = event.data;
        this.grabPoint = this.grabData.getLocalPosition(this);
        this.alpha = 1;
        this.dragging = true;
        this.zIndex = 1000;

        this.app.renderer.view.addEventListener('touchmove', this.disableScrolling)

        this.scale.set(1);

    }

    private rectBounds = new PIXI.Rectangle();

    private onDragMove(event: PIXI.InteractionEvent) {


        if (this.dragging && this.grabData && this.grabPoint) {
            const newPosition = this.grabData.getLocalPosition(this.parent);

            const freePos = [
                newPosition.x - this.grabPoint.x,
                newPosition.y - this.grabPoint.y
            ];

            this.position.set(...freePos);

            const globalY = this.getGlobalPosition().y;
            const windowHeight = window.innerHeight;
            const canvasRec = this.app.renderer.view.getBoundingClientRect();
            const canvasTop = canvasRec.top;
            const canvasBottom = canvasRec.bottom;

            const pointerViewportY = canvasTop + globalY;

            this.getBounds(true, this.rectBounds);

            const itemTop = pointerViewportY - (this.grabPoint?.y || 0) - this.height / 2;
            const itemBottom = pointerViewportY - (this.grabPoint?.y || 0) + this.height / 2;

            if (canvasBottom > windowHeight) {

                if (pointerViewportY > windowHeight * .98 || itemBottom > windowHeight * .98) {
                    window.scroll(
                        window.scrollX,
                        window.scrollY + windowHeight * .02
                    )
                }
            }

            if (canvasTop < 0) {
                if (pointerViewportY < windowHeight * .02 || itemTop < windowHeight * .02) {
                    window.scroll(
                        window.scrollX,
                        window.scrollY - windowHeight * .02
                    )
                }
            }
        }
    }

    private onDragEnd() {
        this.alpha = 1;
        this.dragging = false;
        // set the interaction data to null
        this.grabData = null;
        this.zIndex = 10;

        this.app.renderer.view.removeEventListener('touchmove', this.disableScrolling)

        this.emit('new-position', {
            position: this.position,
            grabPosition: this.grabPoint ? new PIXI.Point(this.position.x + this.grabPoint.x, this.position.y + this.grabPoint.y) : this.position
        });
    }

    public resetToLastPosition() {
        this.position.set(this.lastPosition.x, this.lastPosition.y);
        this.scale.set(this.lastScale);
    }

    public returnToSource() {
        this.resetToLastPosition();
    }

    public setPosition(x: number, y: number) {
        this.position.set(x, y);
        this.lastPosition.set(x, y);
    }

    public scaleToRect(width: number, height: number) {
        const wScale = Math.min(1, width / (this.width / this.scale.x));
        const hScale = Math.min(1, height / (this.height / this.scale.x));

        this.lastScale = Math.min(wScale, hScale)

        this.scale.set(this.lastScale);
    }

    public resetScale() {
        this.lastScale = 1;
        this.scale.set(this.lastScale);
    }

    public setFontSize(size: number) {
        this.text.style.fontSize = `${size}px`;
    }

    markAsInvalid() {
        this.filters = [
            invalidFilter
        ]
    }

    removeInvalidMark() {
        this.filters = []
    }

    transformToAnswer() {
        this.bg.visible = false;
        this.interactive = false;
        this.text.style.fontSize = '18px';
        this.text.anchor.set(0);
        this.text.style.fill = 0xda783c;
    }
}
