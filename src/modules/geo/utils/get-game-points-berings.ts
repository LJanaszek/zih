

export default function getGamePointsBerings(pointsCount = 5): number[] {
    const padding = Math.random() * 360;

    const mainAngle = 360 / pointsCount;
    const zoneWidth = mainAngle * .7;

    return new Array(pointsCount)
        .fill(null)
        .map((_, index) => {
            return padding + mainAngle*index + (Math.random() * zoneWidth) - zoneWidth/2;
        });
}
