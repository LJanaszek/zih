import { useGeoModuleState } from "../provider";

export default function useGeo() {
    const {position, accuracy, error} = useGeoModuleState();

    return {
        position,
        accuracy,
        error,
        hasPosition: Boolean(position),
    }
}
