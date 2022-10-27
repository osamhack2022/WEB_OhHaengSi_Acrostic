import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { getRooms, Room } from "../../lib/api/room";

export type SoldierFormData = {
  id?: number;
  name: string;
  rank: number;
  roomId: number;
  status: string;
};

export interface ISoldierFormProps {
  submitAction: SubmitHandler<SoldierFormData>;
  defaultValues?: Partial<SoldierFormData>;
  submitButton?: JSX.Element;
  cancelButton?: JSX.Element;
}

export default function SoldierForm({
  submitAction,
  defaultValues,
  submitButton,
  cancelButton,
}: ISoldierFormProps) {
  const router = useRouter();
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<SoldierFormData>({
    defaultValues,
  });
  const [rooms, setRooms] = useState<Room[]>([]);
  useEffect(() => {
    getRooms().then((rooms) => {
      setRooms(rooms);
    });
  }, []);
  const onSubmit = handleSubmit(submitAction);

  return (
    <form onSubmit={onSubmit}>
      {defaultValues?.id && (
        <div className="form-group ">
          <label className="form-label">번호</label>
          <input className="form-control " {...register("id")} readOnly />
        </div>
      )}
      <div className="form-group ">
        <label className="form-label">이름</label>
        <input className="form-control " {...register("name")} required />
      </div>
      <div className="form-group ">
        <label className="form-label">계급</label>
        <select className="form-control " {...register("rank")} required>
          <option value="1">이등병</option>
          <option value="2">일병</option>
          <option value="3">상병</option>
          <option value="4">병장</option>
        </select>
      </div>
      <div className="form-group">
        <label className="form-label">상태</label>
        <select className="form-control " {...register("status")} required>
          <option>열중</option>
          <option>근무</option>
          <option>휴가</option>
          <option>외박</option>
          <option>외출</option>
          <option>외진</option>
          <option>기타</option>
        </select>
      </div>
      <div className="form-group">
        <label className="form-label">생활관</label>
        <select className="form-control " {...register("roomId")} required>
          {rooms?.map((room) => (
            <option key={room.id} value={room.id}>
              {room.name}
            </option>
          ))}
        </select>
      </div>
      {submitButton ?? (
        <button type="submit" className="btn btn-primary btn-block btn-lg">
          병사 추가
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
