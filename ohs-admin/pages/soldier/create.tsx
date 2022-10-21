import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import ContentCard from "../../components/common/card/ContentCard";
import Layout from "../../components/Layout/Layout";
import { createSoldier } from "../../lib/api/soldiers";

type FormData = {
  name: string;
  rank: number;
  roomId: number;
  status: string;
};

const SoldierCreatePage = () => {
  const router = useRouter();
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const onSubmit = handleSubmit((data) => {
    createSoldier({
      ...data,
      rank: +data.rank,
      roomId: +data.roomId,
    }).then(() => {
      alert("생성완료");
      router.push("/soldier");
    });
  });

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
              <select className="form-control " {...register("rank")} required>
                <option value="1">이등병</option>
                <option value="2">일병</option>
                <option value="3">상병</option>
                <option value="4">병장</option>
              </select>
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
            <button
              type="button"
              className="btn btn-danger btn-block btn-lg"
              onClick={() => setValue("roomId", 1)}
            >
              취소
            </button>
          </form>
        </ContentCard>
      </div>
    </Layout>
  );
};

export default SoldierCreatePage;
