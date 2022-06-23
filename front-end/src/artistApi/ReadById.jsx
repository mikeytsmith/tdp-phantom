import axios from "axios";
import { useState } from "react";
import Artist from "../Artist";


const ReadById= ({getData, fetchData}) => {

    const [arist, setArtist] = useState([]);
    const [id, setId] = useState();


    const handleReadByID= (e)=>{
        e.preventDefault();        
        
        axios.get("http://localhost:4494/trainers/read/"+id)
        .then((res)=>{
            setArtist(res.data)
            console.log(res);

            setTimeout(()=>{

                getData(!fetchData)
                console.log("loading")
            }, 500)
            console.log("done")
        })
        .catch((error)=>alert(error))
    }

    return ( 
        <>
        <br/>
        <h2>Read Artist by ID: </h2>
        <br/>
        <input type="number" min={0} placeholder="ID" value={id} onChange={(e)=>{setId(e.target.value)}}/>
        <br/>
        <button className="button button4" onClick={handleReadByID} >READ</button>
        <br/>
        {
            (<Artist key={artist._id} id={artist._id} name={artist.name} age={artist.age} specialism={artist.specialism}/>)
        }
        
        </>
     );
}

export default ReadById;