'use client'
import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';

interface User {
    _id: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    // Add other fields as per your User model
}

const UserPage: React.FC = () => {
    const { id } = useParams<{ id: string }>(); // Get the user ID from the route params
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await fetch(`http://localhost:5000/api/users/${id}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch user');
                }
                const data = await response.json();
                setUser(data); // Assuming data structure includes user details directly
            } catch (error) {
                console.error('Error fetching user:', error);
            }
        };

        if (id) {
            fetchUser();
        }
    }, [id]);

    if (!user) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>User Page ID: {id}</h1>
            <p>Name: {user.firstName} {user.lastName}</p>
            <p>Phone Number: {user.phoneNumber}</p>
        </div>
    );
};

export default UserPage;
