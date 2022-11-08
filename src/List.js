import React from "react";

export default function List({ data, controlEdit, controlDelete }) {
  return (
    <div className="list-group">
      {data.map((base) => {
        return (
          <div className="list-group-item list-group-item-action">
            <div className="d-flex w-100 justify-content-between">
              <h5 className="mb-1">{base.name}</h5>
              <div>
                <button onClick={() => controlEdit(base.id)} className="btn btn-sm btn-link">Edit</button>
                <button onClick={() => controlDelete(base.id)} className="btn btn-sm btn-link">Del</button>
              </div>
            </div>
            <p className="mb-1">{base.nomor}</p>
          </div>
        );
      })}
    </div>
  );
}
