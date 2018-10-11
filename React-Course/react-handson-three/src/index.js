import React from 'react';
import ReactDOM from 'react-dom';

const App = props => {
  const favoriteCars = [
  'Honda CR-V ', 
  'Toyota Highlander', 
  'Ford F-150', 
  'BMW X3', 
  'Subaru Crosstrek'
];
  return (
    <ol>
      <List items={items} />
      <Employee name="Elizabeth" age={27} position="Sales Manager" />
      <GroceryList item1="Apples" item2="Oranges" item3="Mangos" />
    </ol>
  );
};

const List = props => {
  const listItems = props.items.map((item, index) => (
    <li key={index}>
      {item.name}: {item.price}
    </li>
  ));

  return <ul>{listItems}</ul>;
};

const Employee = props => (
  <ul>
    <li>{props.name}</li>
    <li>{props.age}</li>
    <li>{props.position}</li>
  </ul>
);

const GroceryList = props => (
  <ul>
    <li>{props.item1}</li>
    <li>{props.item2}</li>
    <li>{props.item3}</li>
  </ul>
);

ReactDOM.render(<App />, document.getElementById('root'));