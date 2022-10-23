import { useRouter } from "next/router";
import { SubmitHandler, useForm } from "react-hook-form";
import {
  IOrganizedRoster,
  IRosterResponse,
  RosterForm,
} from "../../../lib/api/roster";
import { v4 } from "uuid";
import { useState } from "react";
import Category from "./Category";
import { ITmpOrganizedRoster, RosterFormData } from "./types";

export interface IRosterFormFormProps {
  submitAction: SubmitHandler<RosterFormData>;
  defaultValues?: Partial<RosterFormData>;
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
  } = useForm<RosterFormData>({
    defaultValues,
  });
  const [roster, setRoster] = useState<ITmpOrganizedRoster[]>(
    defaultValues?.roster ?? []
  );
  const onSubmit = handleSubmit((data) => submitAction({ ...data, roster }));

  // detail에 수정을 위한 id 생성
  roster.forEach((item) => {
    item.id = v4();
  });

  return (
    <form>
      <Category items={roster} update={setRoster} />
      <div className="row">
        {submitButton ?? (
          <button
            type="button"
            className="btn btn-primary btn-block btn-lg"
            onClick={onSubmit}
          >
            근무 수정
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
