import React, { useContext } from 'react'
import Button from '@material-ui/core/Button';
import {UrlContext} from '../contexts/UrlContext' 


const Nav = () => {
    
const { url, setUrl } = useContext(UrlContext)


    


    
    return (
        <div>
            <input type='button' value={url} onClick={() => {
              setUrl('upcoming')
            }} />
        </div>
    )
}

export default Nav
