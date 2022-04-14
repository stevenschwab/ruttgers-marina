import { apolloClient } from "../../graphql";
import { GET_ALL_BOATS } from "./queries";
import { GetBoats_boats } from "./__generated__/GetBoats";

class BoatService {
    public async getBoats(): Promise<GetBoats_boats[]> {
        const response = await apolloClient
            .query({ query: GET_ALL_BOATS})
            .catch((err) => {
                throw err;
            });

        if(response && response.data && response.data.boats) 
            return response.data.boats as GetBoats_boats[];

        return [];
    }
}

export default new BoatService();