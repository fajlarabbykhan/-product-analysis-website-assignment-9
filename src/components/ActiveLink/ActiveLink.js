import React from 'react';
import { Link, useMatch, useResolvedPath } from "react-router-dom";
const ActiveLink = ({ children, to, ...props }) => {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });
    return (
        <Link
            style={{ color: match ? "#3f6bc5" : "black" }}
            to={to}
            {...props}
        >
            {children}
        </Link>
    )
};

export default ActiveLink;