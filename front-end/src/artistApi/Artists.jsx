import axios from "axios";
import { useEffect, useState } from "react";
import Artist from "../Artist";
import AddNewArtist from "./AddNewArtist";
import DeleteArtist from "./DeleteArtist";
import ReadById from "./ReadById";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Navi from "./Nav";

const Artist= () => {

    const [artists, setArtists] = useState([]);
    const [fetchData, setFetchData] = useState(false);


    useEffect(() => {
        axios.get("http://localhost:4494/trainers/readAll")
            .then(res => setArtists(res.data))
            .catch(err => console.error(err));
    }, [fetchData]);

    return ( 
        <>
        {/* <h2>List of trainers: </h2>
        {
            trainers.map(trainer => <Trainer key={trainer._id} id={trainer._id} name={trainer.name} age={trainer.age} specialism={trainer.specialism}/>)
        }
        <br/> 
         <h2>Add new trainer: </h2>
        <AddNewTrainer getData={setFetchData} fetchData={fetchData}/>
        <br/>
        <h2>Remove an existing trainer: </h2>
        <DeleteTrainer getData={setFetchData} fetchData={fetchData}/>
        <br/>
        <h2>Read trainer by ID: </h2>
        <ReadById getData={setFetchData} fetchData={fetchData}/> */}
        <BrowserRouter>
        <Navi/>
        <Routes>
            <Route exact path="/" element={artists.map(artist => <Artist key={artist._id} id={artist._id} name={artist.name} age={artist.age} specialism={artist.specialism}/>)}/>
            <Route path="/EditList" element={<AddNewArtist getData={setFetchData} fetchData={fetchData}/>}/>
            <Route path="/DeleteArtist" element={<DeleteArtist getData={setFetchData} fetchData={fetchData}/>}/>
            <Route path="/FindArtist" element={<ReadById getData={setFetchData} fetchData={fetchData}/>}/>
        </Routes>
        </BrowserRouter>

        </>
     );
}

export default Artists;