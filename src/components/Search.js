import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';
import { Button } from '@material-ui/core';
import Styled from 'styled-components'; 
// 

import { useState } from 'react';

const SearchInput = Styled.div`
      display: flex;
      align-items: center;
      border: 1px solid lightgray; 
      height: 30px;
      padding: 10px 15px; 
      width; 500px;
      margin: 0px auto; 
      margin-top: 40px;
      border-radius: 999px; 
      input {
          flex: 1px;
          padding: 8px 13px;
          font-size: medium;
          border: 0px; 
          outline: 0px; 
      }

      .searchicon {
         color: gray;
      }
`
const SearchButton = Styled.div `
   margin-top: 20px;
   display: flex;
   justify-content: center;
   button{
       margin: 5px;
       background: #f8f8f8 !important;
       border: 1px solid white; 
       text-transform: inherit;
       &:hover {
        margin: 5px;
        background: #f8f8f8 !important;
        color: #000;
        border: 1px solid #c6c6c6;
       }  
   }
`
const Search = ({ hide }) => {
    const [input, setInput] = useState("");
    return (
        <form>
            <SearchInput>
                <SearchIcon className = 'searchicon'/>
                <input value={input} onChange={ e => setInput(e.target.value)}/>
                <MicIcon/>
            </SearchInput>
            {!hide && (
                <SearchButton>
                    <Button type='submit' variant='outlined'>Google Search</Button>
                    <Button variant='outlined'> I am feeling lucky</Button>
                </SearchButton>
            )}
        </form>
    )
}
export default Search;