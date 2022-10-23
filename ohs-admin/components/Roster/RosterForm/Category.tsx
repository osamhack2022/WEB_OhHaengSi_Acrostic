import { Dispatch, SetStateAction, useState } from "react";
import { v4 } from "uuid";
import { ITmpOrganizedRoster } from "./types";
import Work from "./Work";

function CategoryItem({
  item,
  update,
}: {
  item: ITmpOrganizedRoster;
  update: Dispatch<SetStateAction<ITmpOrganizedRoster[]>>;
}) {
  return (
    <div key={item.id} className="row mb-4">
      <div className="col-2">
        <label>근무 분류</label>
        <input
          type="text"
          className="form-control"
          value={item.name}
          readOnly
        />
      </div>
      <Work items={item.works} cId={item.id!} update={update} />
    </div>
  );
}

export default function Category({
  items,
  update,
}: {
  items?: ITmpOrganizedRoster[];
  update: Dispatch<SetStateAction<ITmpOrganizedRoster[]>>;
}) {
  if (!items) return null;

  return (
    <div className="row mb-4">
      <div className="col-12">
        {items.map((item) => (
          <CategoryItem key={item.id} item={item} update={update} />
        ))}
      </div>
    </div>
  );
}
