import Navbar from "./components/Navbar.jsx";
import Products from "./components/Products.jsx";

import "./styles.css";

const Component = () => {
	useEffect(() => {
	  window.addEventListener('beforeunload', alertUser)
	  window.addEventListener('unload', handleEndConcert)
	  return () => {
		window.removeEventListener('beforeunload', alertUser)
		window.removeEventListener('unload', handleEndConcert)
		handleEndConcert()
	  }
	}, [])
  
	const alertUser = e => {
	  e.preventDefault()
	  e.returnValue = ''
	}
  
	const handleEndConcert = async () => {
	  await fetcher({
		url: endConcert(concert.id),
		method: 'PUT'
	  })
	}
  
	return (
	  <Container>
		<Prompt
		  when={isPrompt()}
		  message={() => 'Are you sure you want to leave this page?'}
		/>
	  </Container>
	)
  }

const App = () => {
	return (
		<div>
			<Navbar></Navbar>
			<Products></Products>
		</div>
	);
};

export default App;
