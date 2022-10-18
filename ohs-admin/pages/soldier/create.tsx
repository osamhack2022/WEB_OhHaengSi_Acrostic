import ContentCard from "../../components/common/card/ContentCard";
import Table from "../../components/common/Table";
import Layout from "../../components/Layout/Layout";

const SoldierCreatePage = () => {
  return (
    <Layout>
      <div className="row justify-content-center">
        <ContentCard className="col-xl-6 col-md-8" title="병사 추가">
          <form>
            <div className="form-group ">
              <label className="form-label">이름</label>
              <input
                type="text"
                className="form-control "
                id="exampleFirstName"
                placeholder="이름"
              />
            </div>
            <div className="form-group ">
              <label className="form-label">계급</label>
              <input
                type="text"
                className="form-control "
                id="exampleFirstName"
                placeholder="계급"
              />
            </div>
            <div className="form-group">
              <label className="form-label">상태</label>
              <select className="form-control ">
                <option>열중</option>
                <option>근무</option>
                <option>휴가</option>
                <option>기타</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">생활관</label>
              <select className="form-control ">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
              </select>
            </div>
            <button type="button" className="btn btn-primary btn-block btn-lg">
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
