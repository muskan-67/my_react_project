const Dashboard = () => {
  



  return (
    <>
      <div className="right-content w-100">
        <h2>Dashboard</h2>
        <div className="row">
          <div className="col-md-6">

           <div className="dashboardBoxWrapper">
            
            <div className="dashboardBox">
             <span className="topic">Active plans details</span>
             <div className="plans">
              

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
