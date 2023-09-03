import React from 'react';

const LoginForm = () => {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">Login</div>
            <div className="card-body">
              {/* <form> */}
                <div className="mb-3">
                  <label htmlFor="username" className="form-label">Username</label>
                  <input type="text" className="form-control" id="username" />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input type="password" className="form-control" id="password" />
                </div>              
                    <a href="/TodoList"><button type="next" className="btn btn-primary" >Next</button></a>
                
                            
              {/* </form> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
