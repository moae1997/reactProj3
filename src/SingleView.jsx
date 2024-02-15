import React from "react";

export default function SingleVeiw({oneContact}) {

    return (
        <>
            <h1>{oneContact.name}</h1>
            <h2>Basic info</h2>
            <p>{oneContact.email}</p>
            <p>{oneContact.phone}</p>
            <h2>Profile</h2>
            <p>{oneContact.address}</p>
            <p>{oneContact.website}</p>
            <p>{oneContact.company}</p>
        </>
    )
}

