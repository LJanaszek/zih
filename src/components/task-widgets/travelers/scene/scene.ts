import * as THREE from 'three';
import OrientationControls from './controls';



import Sticker1 from '../placeholder.png';
import Sticker2 from '../placeholder.png';
import Sticker3 from '../placeholder.png';
import Sticker4 from '../placeholder.png';

import TWEEN from '@tweenjs/tween.js';

type StickerData = {
    texture: string,
    scale: [number, number, number]
}

const stickers: StickerData[] = [
    {
        texture: Sticker1,
        scale: [2, 4, 2]
    },
    {
        texture: Sticker2,
        scale: [2, 4, 2]
    },
    {
        texture: Sticker3,
        scale: [2, 4, 2]
    },
    {
        texture: Sticker4,
        scale: [2, 4, 2]
    }
]

export type SceneAPI = {
    getPoints(): number;
}

const RADIUS = 10;



export default function createScene(container: HTMLElement): SceneAPI {

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, container.offsetWidth / container.offsetHeight, 0.1, 1000);
    let points = 0;

    const renderer = new THREE.WebGLRenderer({ alpha: true });

    const visibleSprites = new Map<number, THREE.Sprite>();


    renderer.setSize(container.offsetWidth, container.offsetHeight);
    container.appendChild(renderer.domElement);

    // spritesPos.forEach((deg) => {
    //     const pos = degToPosition(Math.random() * 360)
    //     createSprite(pos, stickers[(Math.random() * stickers.length) | 0]);
    // })


    camera.position.z = 5;

    const control = OrientationControls(camera);

    const update = function (time: number) {
        requestAnimationFrame(update);
        TWEEN.update(time)

        visibleSprites.forEach(sprite => {
            sprite.material.rotation = -camera.rotation.z;
        })

        control.update();

        renderer.render(scene, camera);

        if (visibleSprites.size < 8) {
            const pos = degToPosition(Math.random() * 360)
            createSprite(pos, stickers[(Math.random() * stickers.length) | 0])
        }
    };

    container.addEventListener('click', (event) => {
        const mouse = new THREE.Vector2(
            (event.offsetX / container.offsetWidth) * 2 - 1,
            - (event.offsetY / container.offsetHeight) * 2 + 1
        );

        const raycaster = new THREE.Raycaster();
        raycaster.setFromCamera(mouse, camera);

        const intersects = raycaster.intersectObjects(scene.children);

        for (let i = 0; i < intersects.length; i++) {
            const sprite = visibleSprites.get(intersects[i].object.id);

            if (sprite) {
                points = points+1;
                sprite.material.color.set(0xff0000);

                const scale = {
                    x: sprite.scale.x,
                    y: sprite.scale.y,
                    z: sprite.scale.z
                }

                visibleSprites.delete(sprite.id);

                new TWEEN.Tween(scale)
                    .to({
                        x: 0,
                        y: 0,
                        z: 0,
                    }, 500)
                    .easing(TWEEN.Easing.Quadratic.Out)
                    .onUpdate(() => {
                        sprite.scale.set(scale.x, scale.y, scale.z);
                    })
                    .onComplete(() => {
                        sprite.remove();
                    })
                    .start();
            }

        }
    });

    requestAnimationFrame(update);

    function createSprite(position: [number, number, number], sticker: StickerData) {
        const map = new THREE.TextureLoader().load(sticker.texture);
        const material = new THREE.SpriteMaterial({ map: map });
        const sprite = new THREE.Sprite(material);

        sprite.position.x = position[0];
        sprite.position.y = position[1];
        sprite.position.z = position[2];

        sprite.scale.set(0, 0, 0);

        const scale = {
            x: 0,
            y: 0,
            z: 0
        }

        new TWEEN.Tween(scale)
            .to({
                x: sticker.scale[0],
                y: sticker.scale[1],
                z: sticker.scale[2],
            }, 500)
            .easing(TWEEN.Easing.Quadratic.Out)
            .onUpdate(() => {
                sprite.scale.set(scale.x, scale.y, scale.z);
            })
            .start();



        scene.add(sprite);

        visibleSprites.set(sprite.id, sprite);

        return sprite;
    }


    function degToPosition(deg: number): [number, number, number] {
        return [
            Math.sin((deg / 180) * Math.PI) * RADIUS,
            0,
            -Math.cos((deg / 180) * Math.PI) * RADIUS
        ]
    }

    return {
        getPoints: () => {
            return points
        }
    }
}

