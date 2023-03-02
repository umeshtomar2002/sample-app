import {useNavigate} from 'react-router-dom'

export default function Navigation(){
   const navaigate = useNavigate();
   const handleLogin = () => {      
      navaigate('/dashboard') //or whatever path you wish
   }
}