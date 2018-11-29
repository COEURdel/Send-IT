import db from "./index";
import uuid from "uuid";

const createtables= async()=>{
    await db.query(`CREATE TABLE IF NOT EXISTS users
        (
            id uuid PRIMARY KEY,
            firstname VARCHAR(255) NOT NULL, 
            lastname VARCHAR(255) NOT NULL, 
            email VARCHAR(255) NOT NULL UNIQUE, 
            location VARCHAR(100) NOT NULL, 
            password VARCHAR NOT NULL, 
            created_at TIMESTAMP WITH TIME ZONE NOT NULL, 
            updated_at TIMESTAMP WITH TIME ZONE NOT NULL,
        )
    `);
    await db.query(`
        CREATE TABLE IF NOT EXISTS parcels
        (
            id uuid PRIMARY KEY, 
            location VARCHAR(255) NOT NULL, 
            destination VARCHAR(255) NOT NULL, 
            price int NOT NULL, 
            departure date NOT NULL, 
            userid int NOT NULL, 
            created_at TIMESTAMP WITH TIME ZONE NOT NULL, 
            updated_at TIMESTAMP WITH TIME ZONE NOT NULL, 
            FOREIGN KEY(userId) REFERENCES users(id),
        )
    `);

    await db.query(`
        CREATE TABLE IF NOT EXISTS admin
        (
            id uuid PRIMARY KEY, 
            userid int NOT NULL, 
            parcelid int NOT NULL, 
            status ('pending'), 
            created_at TIMESTAMP WITH TIME ZONE NOT NULL, 
            updated_at TIMESTAMP WITH TIME ZONE NOT NULL, 
            FOREIGN KEY(userId) REFERENCES users(id), 
            FOREIGN KEY(parcelId) REFERENCES parcels(id),
        )
    `);

}

export default createtables;