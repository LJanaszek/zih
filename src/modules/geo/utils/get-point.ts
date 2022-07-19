/**
 * Zwraca współrzędne ponktu względem od podanego punktu
 *
 * @param brng kierunek w stopniach
 * @param dist odleglosc w km
 * @param param2 pozycja startowa
 * @returns
 */
export function getPoint(brng: number, dist: number, { lat, lng }: { lat: number, lng: number }) {
    dist = dist / 6371;
    brng = toRad(brng);

    var lat1 = toRad(lat), lon1 = toRad(lng);

    var lat2 = Math.asin(Math.sin(lat1) * Math.cos(dist) +
        Math.cos(lat1) * Math.sin(dist) * Math.cos(brng));

    var lon2 = lon1 + Math.atan2(Math.sin(brng) * Math.sin(dist) *
        Math.cos(lat1),
        Math.cos(dist) - Math.sin(lat1) *
        Math.sin(lat2));

    if (isNaN(lat2) || isNaN(lon2)) return null;

    return {
        lat: toDeg(lat2),
        lng: toDeg(lon2)
    };
}

function toRad(value: number) {
    return value * Math.PI / 180;
}

function toDeg(value: number) {
    return value * 180 / Math.PI;
}

export function bearing(
    { lat: startLat, lng: startLng }: { lat: number, lng: number },
    { lat: destLat, lng: destLng }: { lat: number, lng: number }
) {
    startLat = toRad(startLat);
    startLng = toRad(startLng);
    destLat = toRad(destLat);
    destLng = toRad(destLng);

    const y = Math.sin(destLng - startLng) * Math.cos(destLat);
    const x = Math.cos(startLat) * Math.sin(destLat) -
        Math.sin(startLat) * Math.cos(destLat) * Math.cos(destLng - startLng);
    let brng = Math.atan2(y, x);
    brng = toDeg(brng);
    return (brng + 360) % 360;
}
