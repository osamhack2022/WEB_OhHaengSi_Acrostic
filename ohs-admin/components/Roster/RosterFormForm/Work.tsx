import { Dispatch, SetStateAction, useState } from "react";
import { v4 } from "uuid";
import { ITmpRosterWorkForm, ITmpRosterForm } from "./types";

function WorkItem({
  cId,
  work,
  update,
}: {
  work: ITmpRosterWorkForm;
  cId: string;
  update: Dispatch<SetStateAction<ITmpRosterForm[]>>;
}) {
  const [name, setName] = useState(work?.name);
  const [requiredMember, setRequiredMember] = useState(work?.requiredMember);
  const [editable, setEditable] = useState(false);

  return (
    <div className="row mb-2">
      <div className="col-auto">
        <label>근무명</label>
        <input
          type="text"
          className="form-control"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          readOnly={!editable}
        />
      </div>
      <div className="col-auto">
        <label>필요 인원</label>
        <input
          type="number"
          className="form-control"
          value={requiredMember}
          onChange={(e) => {
            setRequiredMember(+e.target.value);
          }}
          readOnly={!editable}
        />
      </div>
      <div className="col-auto d-flex align-items-end">
        {editable ? (
          <>
            <button
              type="button"
              className="btn btn-primary mr-2"
              onClick={() => {
                setEditable(false);
                update((prev) => {
                  return prev.map((category) => {
                    if (category.id == cId) {
                      category.works = category.works.map((item) => {
                        if (item.id == work.id) {
                          console.log("change!!", name, requiredMember);
                          return {
                            ...item,
                            name: name,
                            requiredMember: requiredMember,
                          };
                        }

                        return item;
                      });
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
                setName(work.name);
                setRequiredMember(work.requiredMember);
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
    </div>
  );
}

export default function Work({
  items,
  cId,
  update,
}: {
  items?: ITmpRosterWorkForm[];
  cId: string;
  update: Dispatch<SetStateAction<ITmpRosterForm[]>>;
}) {
  if (!items) return null;

  return (
    <div className="col-auto">
      {items.map((item) => (
        <WorkItem key={item.id} cId={cId} work={item} update={update} />
      ))}
      <div className="row mb-2">
        <div className="col-auto">
          <button
            className="btn btn-primary"
            type="button"
            onClick={() => {
              update((prev) => {
                prev
                  .find((value) => value.id == cId)
                  ?.works.push({
                    id: v4(),
                    name: "",
                    requiredMember: 0,
                  });

                return [...prev];
              });
            }}
          >
            근무추가
          </button>
        </div>
      </div>
    </div>
  );
}
