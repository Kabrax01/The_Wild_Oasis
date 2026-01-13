"use client";

import { User } from "@/types/general";
import { useState } from "react";

interface UsersProps {
    users: User[];
}

const Counter = ({ users }: UsersProps) => {
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>There are {users.length} users</p>
            <button onClick={() => setCount((c) => c + 1)}>{count}</button>;
        </div>
    );
};

export default Counter;
