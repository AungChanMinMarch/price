import React from "react";
import { createRoot } from "react-dom/client";

import PromiseTracker from './utils/PromiseTracker.js';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

import App from './App';

createRoot(document.getElementById('root')).render( 
	<>
		<App />
		<PromiseTracker />
		<ToastContainer 
			position='bottom-center'
			autoClose={1000}
			newestOnTop={true}
		/>
	</>
);
