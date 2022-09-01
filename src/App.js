import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Components
import Nav from './components/Navbar'
import Header from './components/Header'
import Employees from './components/Employees'
import GroupedTeamMembers from './components/GroupedTeam'
import NotFound from './components/NotFound'
import Footer from './components/Footer'

import { DataProvider } from './context/DataContext'

const App = () => {
	return (
		<DataProvider>
			<Router>
				<Nav />
				<Header />
				<Routes>
					<Route path='/' element={<Employees />}></Route>
					<Route path='/GroupedTeamMembers' element={<GroupedTeamMembers />}></Route>
					<Route path='*' element={<NotFound />} />
				</Routes>
				<Footer />
			</Router>
		</DataProvider>
	)
}

export default App
