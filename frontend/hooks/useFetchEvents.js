import {useQuery} from "react-query"

import { LOCAL_IP, GOOGLE_PLACES_API_KEY } from '@env';

export default function useFetchEvents() {
    const getEvents = async () => {
        const res = await (
            await fetch(`http://${LOCAL_IP}:3000/events/`, {method: 'GET', headers: {'Content-Type': 'application/json'}})
        ).json();
        console.log("Response is", res)
        return res;
    }

    return useQuery(["events"], getEvents)
}
