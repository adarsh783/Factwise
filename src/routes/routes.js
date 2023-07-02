import React from 'react';

const LandingPage = React.lazy(() => import('../pages/landingPage/views/LandingPage'));

export const routes = [
	{ path: '/', component: LandingPage, index: true },
]
