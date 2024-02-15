import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const dummyContact = [
    { id: 1, name: "test", phone: "test", email: "test", address: "test", website: "test", company: "test" },
    { id: 2, name: "test", phone: "test", email: "test", address: "test", website: "test", company: "test" },
    { id: 3, name: "test", phone: "test", email: "test", address: "test", website: "test", company: "test" },
  ];

export default function SelectedContact({selectedContactId, setSelectedContactId}) {

    const [oneContact, setOneContact] = useState(dummyContact)
  useEffect(() => {
    async function fetchContacts() {
      try {
        const response = await fetch(
          `https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`
        ); 
        const result = await response.json(); 
        console.log(result);
        setOneContact(result);
      } catch (error) {
        console.error(error);
      }
    }
    fetchContacts()
  }, []);


  return (
    <>
        <h1>{oneContact.name}</h1>
            <h2>Basic info</h2>
            <p>{oneContact.email}</p>
            <p>{oneContact.phone}</p>
            <h2>Profile</h2>
            <p>{oneContact.website}</p>
            <button onClick={() => {
        setSelectedContactId(null);
      }}>Click to go back</button>
    </>
  )
}