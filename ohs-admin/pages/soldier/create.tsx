import { useForm } from "react-hook-form";
import ContentCard from "../../components/common/card/ContentCard";
import Layout from "../../components/Layout/Layout";

type FormData = {
  name: string;
  rank: string;
  roomId: number;
  status: string;
};

const SoldierCreatePage = () => {
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const onSubmit = handleSubmit((data) => console.log(data));
  // firstName and lastName will have correct type

  return (
    <Layout>
      <div className="row justify-content-center">
        <ContentCard className="col-xl-6 col-md-8" title="병사 추가">
          <form onSubmit={onSubmit}>
            <div className="form-group ">
              <label className="form-label">이름</label>
              <input className="form-control " {...register("name")} required />
            </div>
            <div className="form-group ">
              <label className="form-label">계급</label>
              <input className="form-control " {...register("rank")} required />
            </div>
            <div className="form-group">
              <label className="form-label">상태</label>
              <select
                className="form-control "
                {...register("status")}
                required
              >
                <option>열중</option>
                <option>근무</option>
                <option>휴가</option>
                <option>기타</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">생활관</label>
              <select
                className="form-control "
                {...register("roomId")}
                required
              >
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
              </select>
            </div>
            <button type="submit" className="btn btn-primary btn-block btn-lg">
              병사 추가
            </button>
            <button type="button" className="btn btn-danger btn-block btn-lg">
              취소
            </button>
          </form>
        </ContentCard>
      </div>
    </Layout>
  );
};

export default SoldierCreatePage;
