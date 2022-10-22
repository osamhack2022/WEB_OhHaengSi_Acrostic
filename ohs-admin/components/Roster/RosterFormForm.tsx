import { useRouter } from "next/router";
import { SubmitHandler, useForm } from "react-hook-form";
import { IRosterForm, IRosterWorkForm, RosterForm } from "../../lib/api/roster";
import { v4 } from "uuid";
import { Dispatch, SetStateAction, useState } from "react";

export type RosterFormFormData = Omit<RosterForm, "id"> & {
  id?: number;
};

export interface IRosterFormFormProps {
  submitAction: SubmitHandler<RosterFormFormData>;
  defaultValues?: Partial<RosterFormFormData>;
  submitButton?: JSX.Element;
  cancelButton?: JSX.Element;
}

function Work({
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
        <div key={item.id} className="row mb-2">
          <div className="col-auto">
            <label>근무명</label>
            <input
              type="text"
              className="form-control"
              defaultValue={item.name}
            />
          </div>
          <div className="col-auto">
            <label>필요 인원</label>
            <input
              type="number"
              className="form-control"
              defaultValue={item.requiredMember}
            />
          </div>
        </div>
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

function Category({
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
          <div key={item.id} className="row mb-4">
            <div className="col-2">
              <label>근무 분류</label>
              <input
                type="text"
                className="form-control"
                defaultValue={item.name}
              />
            </div>
            <Work items={item.works} cId={item.id!} update={update} />
          </div>
        ))}
        <div className="row">
          <button
            className="btn btn-primary"
            onClick={() => {
              update((prev) => {
                prev.push({
                  id: v4(),
                  name: "",
                  works: [],
                });

                return [...prev];
              });
            }}
          >
            근무 분류 추가
          </button>
        </div>
      </div>
    </div>
  );
}

interface ITmpRosterWorkForm extends IRosterWorkForm {
  id?: string;
}

interface ITmpRosterForm extends IRosterForm {
  id?: string;
  works: ITmpRosterWorkForm[];
}

export default function RosterFormForm({
  submitAction,
  defaultValues,
  submitButton,
  cancelButton,
}: IRosterFormFormProps) {
  const router = useRouter();
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<RosterFormFormData>({
    defaultValues,
  });
  const [detail, setDetail] = useState<ITmpRosterForm[]>(
    defaultValues?.detail ?? []
  );
  const onSubmit = handleSubmit(submitAction);

  // detail에 수정을 위한 id 생성
  detail.forEach((item) => {
    item.id = v4();
    item.works.forEach((work) => (work.id = v4()));
  });

  console.log(detail);

  return (
    <form onSubmit={onSubmit}>
      {defaultValues?.id || (
        <div className="form-group ">
          <label className="form-label">번호</label>
          <input className="form-control " {...register("id")} readOnly />
        </div>
      )}
      <div className="form-group ">
        <label className="form-label">양식 이름</label>
        <input className="form-control " {...register("name")} required />
      </div>
      <Category items={defaultValues?.detail} update={setDetail} />
      <div className="row">
        {submitButton ?? (
          <button type="submit" className="btn btn-primary btn-block btn-lg">
            양식 추가
          </button>
        )}
        {cancelButton ?? (
          <button
            type="button"
            className="btn btn-danger btn-block btn-lg"
            onClick={() => reset()}
          >
            취소
          </button>
        )}
      </div>
    </form>
  );
}
