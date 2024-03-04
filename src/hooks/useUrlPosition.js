import { useSearchParams } from "react-router-dom";

const useUrlParams = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const lat = searchParams.get('lat');
    const lng = searchParams.get('lng');

    return [lat, lng]
}

export default useUrlParams;