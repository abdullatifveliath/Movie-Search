import React, { useEffect, useState } from 'react'

import { MDBInput } from 'mdb-react-ui-kit';
import { MDBBtn } from 'mdb-react-ui-kit';

function MovieSearch() {

    const [result, setResult] = useState('');

    const [value, setValue] = useState('');

    console.log(value);

    const fetchData = async () => {
        try {
            setResult('')
            fetch(`https://www.omdbapi.com/?t=${value}&apikey=71d3e275`)
                .then(data => data.json())
                .then(data => {
                    setResult(data);
                })
            console.log(result);
        } catch (err) {
            console.log("No such movie found");
            setResult('')
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    const buttonClick = (e) => {
        e.preventDefault();
        fetchData()
    }

    return (
        <div>
            <div style={{ height: '700px' }} className='d-flex align-items-center justify-content-center'>
                <div className='m-5 p-5 shadow rounded-5' style={{ backgroundColor: "rgba(255,255,255,0.75)" }}>
                    <MDBInput
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                        label='Enter the movie name...'
                        id='controlledValue'
                        type='text'
                        className=''
                    />
                    <div className='text-center mt-2'>
                        <MDBBtn onClick={e => buttonClick(e)} className='me-1' color='success'>
                            Search
                        </MDBBtn>
                    </div>
                </div>
                {result.Response != 'False' ?
                    <div className='shadow rounded-5' style={{ backgroundColor: "rgba(255,255,255,0.75)" }}>
                        <div style={{width:"600px"}} className='p-3'>
                            <div className="text-center">
                                <img style={{ objectFit: "contain" }} width="300px" height="300px" src={result.Poster} />
                            </div>
                            <h3 class="text-warning text-center mt-3 mb-3"> {result.Title} {result.Year}</h3>
                            <p class="text-center">{result.Plot}</p>
                            <p class="text-center">Director : {result.Director}</p>
                            <p class="text-center">Actors : {result.Actors}</p>
                            <p class="text-center">Internet Movie Database : {result.imdbRating}</p>
                        </div>
                    </div>
                    :
                    <div>
                    </div>
                }
            </div>
        </div>
    )
}

export default MovieSearch