import React from 'react'
import ContactCard from './ContactCard'

function App(){
    return(
        <div className="contacts">
            <ContactCard 
            contact={{name:"Contact 1", 
            imgUrl: "http://placekitten.com/300/200", 
            phone: "142682", 
            email: "contact1@gmail.com"}}
            />
            <ContactCard 
            contact={{name: "Contact 2", 
            imgUrl: "http://placekitten.com/300/200", 
            phone: "5896632", 
            email: "contact2@gmail.com"}}
            />
            <ContactCard 
            contact={{name: "Contact 3", 
            imgUrl: "http://placekitten.com/300/200", 
            phone: "6662585", 
            email: "contact3@gmail.com"}}
            />
            <ContactCard 
            contact={{name: "Contact 4", 
            imgUrl: "http://placekitten.com/300/200", 
            phone: "8895452", 
            email: "contact4@gmail.com"}}
            />

            </div>


    )
}

export default App