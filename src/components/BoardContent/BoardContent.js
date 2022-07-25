import React, { useState, useEffect } from "react";
import { isEmpty } from "lodash";
import "./BoardContent.scss";
import Column from "components/Column/Column";
import { data } from "actions/initialData";
import { mapOrder } from "utilities/sorts";

const BoardContent = () => {
  const [board, setBoard] = useState({});
  const [columns, setColumns] = useState({});

  useEffect(() => {
    const boardFormDB = data.boards.find((board) => board.id === "board-1");
    if (boardFormDB) {
      setBoard(boardFormDB);
      setColumns(mapOrder(boardFormDB.columns, boardFormDB.columsOrder, "id"));
    }
  }, []);

  if (isEmpty(board)) {
    return <h1>Not Found</h1>;
  }

  return (
    <div className="board-content">
      {columns.map((column, index) => (
        <Column key={index} column={column} />
      ))}
    </div>
  );
};

export default BoardContent;
