import axiosClient from '../../../axios';
import { useEffect,useState } from "react";

const FixDepositeLedger = () => {
     const [savingLedger,setSavingLedger] = useState([]);
     const [accounts,setAccounts] = useState([]);
     const [fixDepositeAccounts,setFixDepositeAccounts] = useState([]);
     const [formValue,setFormValue] = useState([]);
     const [formInput,setFormInput] = useState([]);
     const [fixDepositeLedgerData,setFixDepositeLedgerData] = useState([]);
  useEffect(() => {
    fetchSavingLedgerData();
    fetchAccountNumbers();
  },[savingLedger]);

  const fetchSavingLedgerData = () => {
    axiosClient.get('/get-saving-ledger/100008').then(res => {
      if(res.data.status == 200){
        setSavingLedger(res.data.savingLeder);
      }
    });
  }

  const fetchAccountNumbers = () => {
    axiosClient.get('/get-fix-deposite-account-number/100008').then(res => {
      if(res.data.status == 200){
        setAccounts(res.data.accounts);
      }
    });
  }

  const handleChange = (e) => {
    e.preventDefault();
    setFormInput({...formInput, [e.target.name] : e.target.value});
  } 

  const handleSubmit = (e) => {
    e.preventDefault();

    
    const data = {
        start_date : formInput.start_date,
        end_date : formInput.end_date,
        ac_number : formInput.ac_number
    }
    axiosClient.post("/filter-fix-deposite-ledger",data)
    .then(res => {
      if(res.data.status == 200){
        setFixDepositeLedgerData(res.data.fix_deposite_data);
      }
    });
    
    
  }
  
    return(
        <div className="content-wrapper">
            <h3 className="mb-2 text-titlecase mb-4 text-primary">Fix Deposite ledger</h3>
      <div className="row">
        <div className="col-xl-12 grid-margin stretch-card">
            <div className="card">
              <div className="card-body border-bottom">
                <div className="d-flex justify-content-between align-items-center flex-wrap">
                  <h4 className="mb-2 mb-md-0 font-weight-medium text-primary">Member Details</h4>
                </div>
              </div>
              <div className="card-body">
                <div className="row pb-3 mb-1 mt-2">

                    <div className="col-md-6 col-sm-6 mb-3">
                        <div className="d-flex flex-column justify-content-center align-items-center">
                            <h5 className="text-grey">Member Code</h5>
                            <h5 className="text-center">100008</h5>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-6 mb-3">
                        <div className="d-flex flex-column justify-content-center align-items-center">
                            <h5 className="text-grey">Name</h5>
                            <h5 className="text-center">VISHNUBHAI HIRABHAI PRAJAPATI</h5>
                        </div>
                    </div>
                    
                </div>
                   <div className="d-flex justify-content-between align-items-center flex-wrap">
                    <h4 className="mb-2 mt-3 mb-md-0 font-weight-medium text-primary">Saving Ledger Info</h4>
                    <form onSubmit={handleSubmit}>
                    <div className="row pb-3 mb-1 mt-2">
                            <div className="col-md-6 col-sm-6 mb-3">
                                <label for="fromDate" className="form-label">From Date</label>
                                <input type="date" name="from_date" onChange={handleChange}  className="form-control" id="fromDate" placeholder="Select From Date"/>
                            </div>
                            <div className="col-md-6 col-sm-6 mb-3">
                                <label for="toDate" className="form-label">To Date</label>
                                <input type="date" name="to_date" onChange={handleChange} className="form-control" id="toDate" placeholder="Select To Date"/>
                            </div>
                            <div className="col-md-6 col-sm-6 mb-3">
                                <label for="toDate" className="form-label">Select A/C No.</label>
                                <select class="form-control" name="ac_number" onChange={handleChange}>
                                    <option>Select A/C No.</option>
                                    {accounts.map((index) => (
                                        <option value={index}>{index}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="col-md-6 col-sm-6">
                                    <button type="submit" className="btn btn-primary mt-4">Submit</button>
                            </div>
                        </div>
                        </form>
                  </div>
                    <div className="table-responsive pt-3">
                         <table className="table table-bordered2">
                            <tr className="table-primary">
                                <th>SrNo</th>
                                <th>Date</th>
                                <th>Vou. Number</th>
                                <th>Credit Amt. (₹)</th>
                                <th>Debit Amt. (₹)</th>
                                <th>Closing Balance (₹)</th>
                                <th>Remark</th>
                            </tr>
                           
                            <tr>
                                <td>1</td>
                                <td></td>
                                <td></td>
                                <td>12</td>
                                <td>6500.00</td>
                                <td>6955.00</td>
                                <td>455.00</td>
                            
                            </tr>
                          
                        </table> 
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="mt-4 mb-2 text-center">
        <button onclick="window.print()" className="btn btn-primary mr-2">Print</button>
        <button onclick="shareContent()" className="btn btn-secondary">Share</button>
    </div>
</div>

    );
}

export default FixDepositeLedger;