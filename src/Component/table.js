import React from "react";
import "../styles/table.css";
import { Table, Button } from "react-bootstrap";

export default function CoinTable(props) {
  return (
    <div className="container col-sm-6 table table-responsive-sm">
      <Table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Last Name</th>
            <th>Age</th>
            <th>Sport</th>
          </tr>
        </thead>
        <tbody>
          {props.data.map((row) => (
            <tr key={row.id}>
              <td>{row.name}</td>
              <td>{row.lastName}</td>
              <td>{row.age}</td>
              <td>{row.sport}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <div className="button ">
        <Button
          className=" btn-responsive "
          variant="danger"
          onClick={() => props.sortList("name")}
        >
          Sort by name
        </Button>{" "}
        <Button
          className="btn-responsive"
          variant="secondary"
          onClick={() => props.sortList("age")}
        >
          Sort by age
        </Button>{" "}
        <Button
          className="btn-responsive"
          variant="success"
          onClick={() => props.sortList("sport")}
        >
          Sort by sport
        </Button>{" "}
      </div>
    </div>
  );
}
