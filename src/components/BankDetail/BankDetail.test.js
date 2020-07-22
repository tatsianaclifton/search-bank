import React from 'react';
import { Provider } from 'react-redux';
import { configure, mount,  } from 'enzyme';
import configureStore from 'redux-mock-store';
import Adapter from 'enzyme-adapter-react-16';

import LikeButton from '../LikeButton/LikeButton';
import Input from '../Input/Input';
import BankDetail from './BankDetail';

configure({adapter: new Adapter()});

describe('<BankDetail />', () => {
    let wrapper;
    let store;
    const middlewares = [];
    const mockStore = configureStore(middlewares);

    beforeEach(() => {
      store = mockStore({
        notes: [],
        bankSearchResults: [{
          data: {
            ID: 57,
            NAME: "Name",
            STNAME: "FL",
            ZIP: "36357",
            CITY: "Orlando"
          }
        }],
        favoriteBanks: []
      });
      wrapper = mount(
        <Provider store={store}>
          <BankDetail match={{params: {id: 57}}}/>
        </Provider>
      );
    });

    it('should render <Input /> element if bank details retrieved', () => {
        expect(wrapper.find(Input)).toHaveLength(1);
    });

    it('should render <LikeButton /> element if bank details retrieved', () => {
      expect(wrapper.find(LikeButton)).toHaveLength(1);
  });
});