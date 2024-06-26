import { useNavigate } from 'react-router-dom';
import '../../../src/assets/member/css/font-awesome.min.css'
import '../../../src/assets/member/css/materialdesignicons.min.css'
import '../../../src/assets/member/css/style.css'
import '../../../src/assets/member/css/typicons.css'
import '../../../src/assets/member/css/vendor.bundle.base.css'

const MemberLogin = () => {
    const navigate = useNavigate();
    const handleLogin = () => {
      navigate('/member/otp');
    }
    return(
        <>
         <div class="container-scroller">
    <div class="container-fluid page-body-wrapper full-page-wrapper">
      <div class="content-wrapper d-flex align-items-center auth px-0">
        <div class="row w-100 mx-0">
          <div class="col-lg-4 mx-auto">
            <div class="auth-form-light text-center py-5 px-4 px-sm-5">
              <div class="brand-logo">
                <img src="http://thinkdream.in/bank/public/logo.jpeg" alt="logo"/>
              </div>
              <h4>Welcome To 'SNCS'</h4>
              <h6 class="font-weight-light">Please Sign in to continue.</h6>
              <form class="pt-3">
                <div class="form-group text-center">
                  <input type="text" class="form-control form-control-lg text-center" id="" placeholder="Member ID"/>
                </div>
                <div class="form-group">
                  <input type="password" class="form-control form-control-lg text-center" id="" placeholder="Password"/>
                </div>
                <div class="mt-3">
                  <a class="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn" onClick={handleLogin}>SIGN IN</a>
                </div>
                <div class="my-2 d-flex justify-content-between align-items-center">
                  <div class="form-check">
                    <label class="form-check-label text-muted">
                      <input type="checkbox" class="form-check-input"/>
                      Keep me signed in
                    </label>
                  </div>
                  <a href="#" class="auth-link text-black">Forgot password?</a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
        </>
    );
}

export default MemberLogin;