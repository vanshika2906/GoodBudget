import DotEnv from 'dotenv';
import Enzyme from 'enzyme';
import Adaptor from 'enzyme-adapter-react-16';

DotEnv.config({path:'.env.test'});

Enzyme.configure({
    adapter: new Adaptor()
    
});