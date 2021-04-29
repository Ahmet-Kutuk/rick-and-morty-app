import React, { useState } from 'react';
import { useEffect } from 'react';
import Character from '../Character/Character';
import Header from '../Header/Header';
const Content = () => {
  const [character,setCharacter] = useState([]);
  const [pageCount,setPageCount] = useState(1);

  const nextPage = () => {
      if(pageCount<34)
      {
        setPageCount(pageCount+1);
      }
      else{
          alert("Gösterilecek bir şey kalmadı..");
          setPageCount(1);
      }
      
  }
  const backPage = () => {
      if(pageCount>1)
      {
        setPageCount(pageCount-1);
      }
      else{
          setPageCount(1);
        }
      
  }
  
    useEffect(() => {
        try{
            fetch(`https://rickandmortyapi.com/api/character?page=${pageCount}`)
            .then(response => response.json())
            .then(response => setCharacter(response.results));
        } catch(error) {
            console.log(error);
        }
    })

    return(
        <React.Fragment>
        <Header nextPage={nextPage} backPage={backPage} pageCount={pageCount} />
        <div className="container mt-2">
        <div className="row">
          {character.map((item,index) => {
              return (
                  <div class="col mt-2">
                  <Character name={item.name} image={item.image} />
                  </div>
                  )
          })}
        
          </div>
        </div>
        </React.Fragment>
    )
}
export default Content;