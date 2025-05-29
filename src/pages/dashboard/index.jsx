
import { AiOutlinePicRight } from "react-icons/ai";
import { FaRupeeSign } from "react-icons/fa";




const Dashboard = () => {








  return (
    <>
      <div className="right-content">
        <h2>Dashboard</h2>
        <div className="row">
          <div className="col-md-6">

            <div className="dashboardBoxWrapper">
                   
              <div className="dashboardBox">
                <span className="topic">Active plans details</span>
                <div className="plans">
                  <span className="  d-flex justify-content-end starter">Starter Statergy Plan</span><br />
                  <div className="d-flex justify-content-between align-items-center">
                    <div><span >< AiOutlinePicRight /></span>

                      <span className="plan ml-2 ">Active Plan(s)</span></div>

                    <div>
                      <span className="active-plan ">No Active Plan Found</span>
                    </div>

                  </div>
                  <hr className="hr" />

                  <div className="d-flex justify-content-between align-items-center">
                    <div><span >< AiOutlinePicRight /></span>

                      <span className="plan ml-2 ">Expire Plan(s)</span></div>

                    <div>
                      <span className="active-plan">No Active Plan Found</span>
                    </div>

                  </div>

                  <div className="d-flex justify-content-start mt-4 ">
                    <span className="suggestion" >Suggestion based on Profile / Usage</span>
                  </div>





                </div>

                <div className="plans  mt-4">

                  <div className="d-flex justify-content-between align-items-center fs">
                    <div>

                      <span className="plan ml-2 a ">Algostike Money</span></div>

                    <div>
                      <FaRupeeSign />
                      <span className="font-weight-bold ">0.00</span>


                    </div>

                  </div>
                  <div className="d-flex align-items-center justify-content-between money">

                    <input type="text" value={1000} className="input" />
                    <button className="btn btn-primary money-bt">Add Money</button>
                  </div>

                </div>

              </div>
            </div>
          </div>
          <div className="col-md-6">

            <div className="dashboardBoxWrapper">
              <div className="dashboardBox2 ">
                <span className="topic">Profile information</span>

              </div>
              <div className="dashboardBox2">
                <span className="topic">Account information</span>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
