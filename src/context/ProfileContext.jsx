import React, { createContext, useState } from 'react'
import Profile from '../Components/Profile';
import ProfileEdit from '../Components/ProfileEdit';
export const profileDetails = createContext();


const ProfileContext = ({children}) => {
    const [name,Setname] = useState("Sathvik Koriginja")
    const [phone, setPhone] = useState("+91 9347868783");
    const [email, setEmail] = useState("k*****@gmail.com");
    const [address, setAddress] = useState("Hyderabad");
    function handlePhoneChange(e){
        setPhone(e.target.value)
    }
    function handleEmailChange(e){
        setEmail(e.target.value)
    }
    function handleAddresschange(e){
        setAddress(e.target.value)
    }
    function handleNameChange(e){
        Setname(e.target.value)
    }
    const contextValues ={
        name,phone,email,address,handlePhoneChange,handleEmailChange,handleAddresschange,handleNameChange
    }
  return (
    <profileDetails.Provider value={contextValues}>
{children}
    </profileDetails.Provider>
  )
}

export default ProfileContext