import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import serializer from '../';

const adapter = new Adapter();

const Bar = ({ text }) => <h1>{text}</h1>;

const Foo = () => (
  <div>
    <span>Hello</span>
    <Bar text="some text" />
  </div>
);

it('Serializes components', () => {
  Enzyme.configure({ adapter });
  const wrapper = mount(<Foo />);
  expect(wrapper).toMatchSnapshot();
});

it('Serializes components when using find()', () => {
  Enzyme.configure({ adapter });
  const wrapper = mount(<Foo />);
  expect(wrapper.find('span')).toMatchSnapshot();
  expect(wrapper.find('Bar')).toMatchSnapshot();
});

it('Serializes components that render null', () => {
  Enzyme.configure({ adapter });
  const NullComponent = () => null;
  const wrapper = mount(<NullComponent />);
  expect(wrapper).toMatchSnapshot();
});
