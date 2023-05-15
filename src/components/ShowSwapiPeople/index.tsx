/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from "react";
import SwapiService from "src/services/SwapiService";
import IPeopleData from "src/types/Swapi/People";

const ShowSwapiPeople = () => {
    const initPeopleDataState: IPeopleData = {
        name: "",
        height: 0,
        mass: 0,
        hair_color: "",
        skin_color: "",
        eye_color: "",
        birth_year: "",
        gender: "",
        homeworld: "",
        films: [],
        species: [],
        vehicles: [],
        starships: [],
        created: "",
        edited: "",
        url: ""
    };

    const [currentPeopleData, setCurrentPeopleData] = useState<IPeopleData>(initPeopleDataState);

    const getPeopleData = async (id: number) => {
        try{
            const response = await SwapiService.get(id);
            setCurrentPeopleData(response.data);
            console.log(response);
        }catch(error){
            alert(error);
        }
    }

    useEffect(() => {
        getPeopleData(1);
    }, []);

    return (
        <div>
            {currentPeopleData ? (
                <div>
                    <div>{currentPeopleData.name}</div>
                    <div>{currentPeopleData.films}</div>
                </div>
            ): ""}
        </div>
    )
};

export default ShowSwapiPeople;
