import React, { useEffect, useRef } from 'react';
import classes from './Cockpit.css'
import AuthContext from '../../context/auth-context';

const cockpit = (props) => {
  const toggleBtnRef = useRef(null); //use this 'useRef' hooks in functional component!

  useEffect(() => {
    console.log('[Cockpit.js] use Effect');
    //Http request...
    // setTimeout(() => {
    //   alert('Saved data to cloud!');
    // }, 1000);
    toggleBtnRef.current.click();
    return () => {
      console.log('[Cockpit.js] cleanup work in useEffect');
    }
  }, []);

  useEffect(() => {
    console.log('[Cockpit.js] 2nd use Effect');
    return () => {
      console.log('[Cockpit.js] cleanup work in 2nd useEffect');
    }
  });

  const assignedClasses = [];
  let btnClass = '';
  if(props.showPersons) {
      btnClass = classes.Red;
  }

  if (props.persons.length <= 2) {
    assignedClasses.push(classes.yellow);
  }
  if (props.persons.length <= 1) {
    assignedClasses.push(classes.bold);
  }

  return(
      <div className={classes.Cockpit}>
        <h1>{props.title}</h1>
        <p className={assignedClasses.join(' ')}>this is really working!</p>
        
        <button
          ref={toggleBtnRef}
          className={btnClass}
          onClick={props.clicked}>
            Toggle Persons
        </button>
        <AuthContext.Consumer>
          {context => <button onClick={context.login}>log in</button>}
        </AuthContext.Consumer>
      </div>
  );
}

export default cockpit;