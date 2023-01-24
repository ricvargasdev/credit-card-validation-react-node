import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'ignore-styles';


configure({ adapter: new Adapter({ React: { version: '16.x' } }) });
