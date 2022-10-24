import { Dispatch, memo, SetStateAction, useEffect, useState } from "react";
import { IRosterWork } from "../../../lib/api/roster";
import { rankToString } from "../../../lib/helpers/common";
import useSoldiers from "../../../lib/hooks/useSoldiers";
import { useAppDispatch, useAppSelector } from "../../../lib/redux/hooks";
import { addHistory } from "../../../lib/redux/roster/rosterEditSlice";
import { fetchSoldiers } from "../../../lib/redux/soldiers/soldierSlice";
import { ITmpOrganizedRoster } from "./types";

function WorkItem({
  cId,
  work,
  update,
}: {
  work: IRosterWork;
  cId: string;
  update: Dispatch<SetStateAction<ITmpOrganizedRoster[]>>;
}) {
  const soldiers = useAppSelector((state) => state.soldiers.soldiers);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (soldiers.length == 0) {
      dispatch(fetchSoldiers());
    }
  }, [soldiers]);

  const [name, setName] = useState(work?.name);
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
        <label>투입 인원</label>
        {work.members.map((member) => (
          <div key={member.rosterId} className="row">
            <div className="col-auto">
              <select
                className="form-control mb-2"
                value={member?.id ?? ""}
                onChange={(e) => {
                  dispatch(addHistory({ ...member, id: +e.target.value }));
                  update((prev) =>
                    prev.map((category) => {
                      if (category.id == cId) {
                        category.works = category.works.map((work) => {
                          if (work.name == name) {
                            work.members = work.members.map((m) =>
                              m.rosterId == member.rosterId
                                ? { ...m, id: +e.target.value, changed: true }
                                : m
                            );
                          }
                          return work;
                        });
                      }
                      return category;
                    })
                  );
                }}
              >
                {soldiers.map((soldier) => (
                  <option key={soldier.id} value={soldier.id}>
                    {rankToString(soldier.rank)} {soldier.name}
                  </option>
                ))}
                <option value="">미지정</option>
              </select>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Work({
  items,
  cId,
  update,
}: {
  items?: IRosterWork[];
  cId: string;
  update: Dispatch<SetStateAction<ITmpOrganizedRoster[]>>;
}) {
  if (!items) return null;

  return (
    <div className="col-auto">
      {items.map((item, index) => (
        <WorkItem key={index} cId={cId} work={item} update={update} />
      ))}
    </div>
  );
}
