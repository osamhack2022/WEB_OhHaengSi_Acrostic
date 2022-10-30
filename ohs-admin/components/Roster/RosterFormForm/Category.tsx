import { Dispatch, SetStateAction, useState } from "react";
import { v4 } from "uuid";
import { ITmpRosterForm } from "./types";
import Work from "./Work";

function CategoryItem({
  item,
  update,
}: {
  item: ITmpRosterForm;
  update: Dispatch<SetStateAction<ITmpRosterForm[]>>;
}) {
  const [name, setName] = useState(item.name);
  const [editable, setEditable] = useState(false);

  return (
    <div key={item.id} className="row mb-4">
      <div className="col-2">
        <label>근무 분류</label>
        <input
          type="text"
          className="form-control mb-2"
          value={name}
          onChange={(e) => setName(e.target.value)}
          readOnly={!editable}
        />
        {editable ? (
          <>
            <button
              type="button"
              className="btn btn-primary mr-2"
              onClick={() => {
                setEditable(false);
                update((prev) => {
                  return prev.map((category) => {
                    if (category.id == item.id) {
                      return { ...category, name };
                    }
                    return category;
                  });
                });
              }}
            >
              저장
            </button>
            <button
              type="button"
              className="btn btn-danger"
              onClick={() => {
                setEditable(false);
                setName(item.name);
              }}
            >
              취소
            </button>
          </>
        ) : (
          <button
            type="button"
            className="btn btn-warning"
            onClick={() => {
              setEditable(true);
            }}
          >
            수정
          </button>
        )}
      </div>
      <Work items={item.works} cId={item.id!} update={update} />
    </div>
  );
}

export default function Category({
  items,
  update,
}: {
  items?: ITmpRosterForm[];
  update: Dispatch<SetStateAction<ITmpRosterForm[]>>;
}) {
  if (!items) return null;

  return (
    <div className="row mb-4">
      <div className="col-12">
        {items.map((item) => (
          <CategoryItem key={item.id} item={item} update={update} />
        ))}
        <div className="row">
          <div className="col-auto">
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => {
                update((prev) => {
                  return [
                    ...prev,
                    {
                      id: v4(),
                      name: "신규분류",
                      works: [
                        {
                          id: v4(),
                          name: "신규근무",
                          requiredMember: 2,
                        },
                      ],
                    },
                  ];
                });
              }}
            >
              근무 분류 추가
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
