
import { Navbar } from '../components/Navbar';
import {Announcements} from '../components/Announcements';
import { Slider } from '../components/Slider';
import { Categories } from '../components/Categories';
import {Newsletter} from '../components/Newsletter'
import {Footer} from '../components/Footer'
const App = () => {
	return (
		<>
			<Announcements />
			<Navbar />
			<Slider />
			<Categories />
      <Newsletter />
      <Footer />
		</>
	);
};

export default App;
