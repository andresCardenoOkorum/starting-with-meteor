import React from 'react';
import { useState } from 'react';
import { ContactsCollection } from '../api/ContactsCollection';

export const ContactForm = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [imageUrl, setImageUrl] = useState("");


  const saveContact = (e) => {
    e.preventDefault();
    ContactsCollection.insert({name, email, imageUrl});
    setName("");
    setEmail("");
    setImageUrl("");
  }

    return (
        <form>
            <div>
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
            </div>

            <div>
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
            </div>

            <div>
                <label htmlFor="imageURL">Image URL</label>
                <input
                  type="text"
                  id="imageURL"
                  value={imageUrl}
                  onChange={(e) => setImageUrl(e.target.value)}
                />
            </div>

            <div>
                <button type="submit" onClick={saveContact}>Save Contact</button>
            </div>
        </form>
    )
}