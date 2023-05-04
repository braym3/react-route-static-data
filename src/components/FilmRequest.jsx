import axios from "axios";
import { useState, useEffect } from "react";
import { Table, Form, Button, Input, FormGroup, Label } from 'reactstrap';

const FilmRequest = () => {
    const [data, setData] = useState(""); // state to store the data as it changes
    const [search, setSearch] = useState(""); // state to store the search input from the user
    const apiKey = "28f74f5";

    const searchFilm = () => {
        axios.get(`http://www.omdbapi.com/?apikey=${apiKey}&t=${search}`)
            .then((response) => {
                setData(response.data);
            }).catch((error) => {
                console.log("error: ", error);
            }) 
    }

    const displayFilmDetails = () => {
        try {
            if(data !== ""){
                return(
                    <div className='film-table'>
                        <Table striped bordered hover size="sm">
                            <thead>
                                <tr>
                                    <th style={{width: "15%", padding: "2%"}}>Title</th>
                                    <th style={{width: "20%", padding: "2%"}}>Released</th>
                                    <th style={{width: "10%", padding: "2%"}}>Rated</th>
                                    <th style={{width: "20%", padding: "2%"}}>Genre</th>
                                    <th style={{width: "15%", padding: "2%"}}>Director</th>
                                    <th style={{width: "20%", padding: "2%"}}>Poster</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{data.Title}</td>
                                    <td>{data.Released}</td>
                                    <td>{data.Rated}</td>
                                    <td>{data.Genre}</td>
                                    <td>{data.Director}</td>
                                    <td><img src={data.Poster} width="100%" alt="Poster"/></td>
                                </tr>
                                
                            </tbody>
                        </Table>
                    </div>
                );
            }
        } catch(error) {
            console.log(error);
            return(
                <div>
                    <h2>Oops! Could not find that film</h2>
                    <h3>Please try again</h3>
                </div>
            );
        }
    };
    
    return(
        <div className='content'>

            <h1>Find a Film</h1>

            <Form className="film-form">
                <FormGroup className="mb-3">
                    <Label for="filmNameInput">Search by film title</Label>
                    <Input name="filmInput" id="filmNameInput" type="text" placeholder="Film Name" value={search} onChange={(e) => setSearch(e.target.value)}/>
                </FormGroup>
                <Button color="primary" outline onClick={searchFilm}>
                    Find
                </Button>
            </Form>
            
            {displayFilmDetails()}
            
        </div>
    );
};

export default FilmRequest;