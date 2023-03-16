'use client';
import React, { use } from 'react'
import getUser from '../../api/users/usersApi';
  
export default function UserDetails() {

    const user = use(getUser("foo"));

    return (
        <section>
            <div id="name">
                Name: {user.name}
            </div>
            <div id="age">
                Age: {user.age}
            </div>
            <div id="gender">
                Gender: {user.gender}
            </div>
            <div>
                Country: {user.country}
            </div>
        </section>
    )
    

}
