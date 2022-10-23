import { useRouter } from "next/router";
import { SubmitHandler, useForm } from "react-hook-form";
import { RosterForm } from "../../../lib/api/roster";
import { v4 } from "uuid";
import { useState } from "react";
import Category from "./Category";
import { ITmpRosterForm } from "./types";

export type RosterFormFormData = Omit<RosterForm, "id"> & {
  id?: number;
};

export interface IRosterFormFormProps {
  submitAction: SubmitHandler<RosterFormFormData>;
  defaultValues?: Partial<RosterFormFormData>;
  submitButton?: JSX.Element;
  cancelButton?: JSX.Element;
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
  const onSubmit = handleSubmit((data) => submitAction({ ...data, detail }));

  // detail에 수정을 위한 id 생성
  detail.forEach((item) => {
    item.id = v4();
    item.works.forEach((work) => (work.id = v4()));
  });

  return (
    <form>
      {defaultValues?.id && (
        <div className="form-group ">
          <label className="form-label">번호</label>
          <input className="form-control " {...register("id")} readOnly />
        </div>
      )}
      <div className="form-group ">
        <label className="form-label">양식 이름</label>
        <input className="form-control " {...register("name")} required />
      </div>
      <Category items={detail} update={setDetail} />
      <div className="row">
        {submitButton ?? (
          <button
            type="button"
            className="btn btn-primary btn-block btn-lg"
            onClick={onSubmit}
          >
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
