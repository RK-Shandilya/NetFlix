import React from 'react';
import { Navigate } from 'react-router-dom';

export function IsUserRedirect({ user, loggedInPath, children, ...rest }) {
        if (!user) {
          return children;
        }

        if (user) {
          return <Navigate to={loggedInPath} />;
        }
}

