import { NextPage } from "next";
import { useRouter } from "next/router";
import { login } from "../lib/api/auth";
import useUser from "../lib/auth/useUser";

const LoginPage: NextPage = () => {
  const [user, setUser] = useUser();

  return (
    <div className="container">
      {/* Outer Row */}
      <div className="row justify-content-center">
        <div className="col-auto">
          <div className="card o-hidden border-0 shadow-lg my-5">
            <div className="card-body p-0">
              {/* Nested Row within Card Body */}
              <div className="row justify-content-center">
                <div className="col-auto">
                  <div className="p-5">
                    <div className="text-center">
                      <h1 className="h4 text-gray-900 mb-4">
                        오행시 관리자 로그인
                      </h1>
                    </div>
                    <form
                      className="user"
                      onSubmit={async (e) => {
                        e.preventDefault();

                        const body = {
                          username: e.currentTarget.username.value,
                          password: e.currentTarget.password.value,
                        };

                        try {
                          const response = await login(body);
                          setUser(response);
                        } catch (error) {
                          console.error("An unexpected error happened:", error);
                        }
                      }}
                    >
                      <div className="form-group">
                        <input
                          type="string"
                          className="form-control form-control-user"
                          placeholder="아이디를 입력해주세요"
                          name="username"
                          required
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="password"
                          className="form-control form-control-user"
                          placeholder="비밀번호를 입력해주세요"
                          name="password"
                          required
                        />
                      </div>
                      <button
                        className="btn btn-primary btn-user btn-block"
                        type="submit"
                      >
                        로그인
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
