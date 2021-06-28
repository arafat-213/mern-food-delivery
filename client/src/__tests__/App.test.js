import { shallow } from 'enzyme'
import App from '../App'

it('renders with out getting crashed', () => {
	const wrapper = shallow(<App />)
})
