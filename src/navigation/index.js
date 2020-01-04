import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { ROUTE_ROOT, ROUTE_PROTECTED, ROUTE_PUBLIC } from './constants';
import ProtectedRoute from './ProtectedRoute';
import PublicRoute from './PublicRoute';
import AuthenicatedNavigation from './AuthenicatedNavigation';

// Screens/Pages
import ProtectedScreen from '../screens/ProtectedScreen/';
import PublicScreen from '../screens/PublicScreen/';

export default function Navigation() {
    return (
        <Router>
            <div>
                {/* Routes which will be shown when user is logged in */}
                <AuthenicatedNavigation />

                <Switch>
                    <PublicRoute exact path={[ROUTE_PUBLIC, ROUTE_ROOT]}>
                        <PublicScreen />
                    </PublicRoute>
                    <ProtectedRoute path={ROUTE_PROTECTED}>
                        <ProtectedScreen />
                    </ProtectedRoute>
                </Switch>
            </div>
        </Router>
    );
}
