# jest-serializer-enzyme

A snapshot serializer for Jest+Enzyme.

![enzyme](https://cloud.githubusercontent.com/assets/574806/20911209/5e49982e-bb1b-11e6-85bb-987ae0d455ab.gif)

#### Install it
```
npm install --save-dev jest-serializer-enzyme
```

#### Add it to your jest config
```json
"jest": {
  "snapshotSerializers": ["<rootDir>/node_modules/jest-serializer-enzyme"]
}
```

More about Jest's snapshotSerializer config [here](http://facebook.github.io/jest/docs/configuration.html#snapshotserializers-array-string).

#### Enjoy

```javascript
import React from 'react';
import { shallow } from 'enzyme';

const Bar = ({ text }) => <p>{text}</p>

const Foo = () => (
  <div>
    <Bar text="The text" />
  </div>
);

it('Renders', () => {
  const wrapper = shallow(<Foo />);
  expect(wrapper).toMatchSnapshot();
});
```
