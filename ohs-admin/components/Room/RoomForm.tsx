import { useRouter } from "next/router";
import { SubmitHandler, useForm } from "react-hook-form";
import { RoomResponse } from "../../lib/api/room";
import { Soldier } from "../../lib/api/soldiers";
import { rankToString } from "../../lib/helpers/common";

export type RoomFormData = {
  id?: number;
  name: string;
};

export interface IRoomFormProps {
  submitAction: SubmitHandler<RoomFormData>;
  submitButton?: JSX.Element;
  cancelButton?: JSX.Element;
  roomInfo?: RoomResponse;
}

export default function RoomForm({
  submitAction,
  submitButton,
  cancelButton,
  roomInfo,
}: IRoomFormProps) {
  const router = useRouter();
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<RoomFormData>({
    defaultValues: { id: roomInfo?.room?.id, name: roomInfo?.room.name },
  });
  const onSubmit = handleSubmit(submitAction);

  return (
    <form onSubmit={onSubmit}>
      {roomInfo?.room?.id && (
        <div className="form-group ">
          <label className="form-label">번호</label>
          <input className="form-control " {...register("id")} readOnly />
        </div>
      )}
      <div className="form-group ">
        <label className="form-label">이름</label>
        <input className="form-control " {...register("name")} required />
      </div>
      {roomInfo?.room?.members && (
        <div className="row justify-content-center">
          <div className="col-2">
            <p className="font-weight-bold">계급</p>
          </div>
          <div className="col-2">
            <p className="font-weight-bold">이름</p>
          </div>
          <div className="col-2">
            <p className="font-weight-bold">상태</p>
          </div>
        </div>
      )}
      {roomInfo?.room?.members?.map((member) => {
        return (
          <div key={member.id} className="row justify-content-center">
            <div className="col-2">
              <p>{rankToString(member.rank)}</p>
            </div>
            <div className="col-2">
              <p>{member.name}</p>
            </div>
            <div className="col-2">
              <p>{member.status}</p>
            </div>
          </div>
        );
      })}
      {submitButton ?? (
        <button type="submit" className="btn btn-primary btn-block btn-lg">
          생활관 추가
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
    </form>
  );
}
