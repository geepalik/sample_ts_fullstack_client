import http from "src/http-common";
import IPeopleData from "src/types/Swapi/People";

const get = (id: number) => {
    return http.get<IPeopleData>(`${process.env.API_LINK_BASE}/people/${id}`);
};

const SwapiService = {
    get
};

export default SwapiService;
