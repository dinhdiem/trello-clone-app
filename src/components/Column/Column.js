import Task from "components/Task/Task";
import React from "react";

import "./Column.scss";

const Column = () => {
  return (
    <div className="column">
      <header>Board Bar</header>
      <ul className="task-list">
        <Task />
        <Task />
        <Task />
        <Task />
        {/* <li>Add what do you thinks you thinks you thinks you thinks</li>
        <li>Add what do you thinks</li>
        <li>Add what do you thinks</li>
        <li>Add what do you thinks</li>
        <li>Add what do you thinks</li>
        <li>Add what do you thinks</li>
        <li>Add what do you thinks</li> */}
      </ul>
      <footer>Add another card</footer>
    </div>
  );
};

export default Column;
