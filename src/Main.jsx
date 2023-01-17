import React, { useState } from 'react'
import EN from './en.json'
import AZ from './az.json'
import './main.css'
import { setLanguage } from './counterSlice'
import { useSelector, useDispatch } from 'react-redux'
const Main = () => {
    const [myLang, setMyLang] = useState(AZ.content)
    const site = useSelector((state) => state.site)
    const dispatch = useDispatch()
    console.log(site);
    const languages = ['az', 'en']
    const handleLanguage = (lang) =>{
       dispatch(setLanguage(lang))
      if(lang === 'en'){
        setMyLang(EN.content)
      }
      else{
        setMyLang(AZ.content)
      }
    }
  return (
    <div>
        {myLang}
        <br />
        <br />
         aktiv dil - {site.language}
    
    
        <br />
        
        {languages.map((lang, index) =>(
                <div key={index}>
                    <button onClick={()=> handleLanguage(lang)} className={lang === site.language ? 'active' : ''}>{lang}</button>
                </div>
        ))}
    </div>
  )
}

export default Main