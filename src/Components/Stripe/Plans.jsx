import React from 'react';
import Api from '../../Api';

class Plans extends React.Component {
  constructor(props) {
    super(props);
    this.state = { plans:[], loader:false }
  }

  componentDidMount() {
    Api.get('plans').then((res)=> {
      this.setState({plans: res.data.data})
    }).catch((error) => {
      console.log(error);
    })
  }
  render() {
    const {plans} = this.state;
    return <>

    <div className="container mt-5">
       <div className="card-deck mb-3 text-center">
       { plans.map(plan => {
         return (
          <div className="card mb-4 box-shadow">
             <div className="card-header">
                <h4 className="my-0 font-weight-normal">{plan.amount === 0 ? 'Free' : 'Paid' }</h4>
             </div>
             <div className="card-body">
                <h1 className="card-title pricing-card-title">${plan.amount/100} <small className="text-muted">/ mo</small></h1>
                <ul className="list-unstyled mt-3 mb-4">
                   <li>10 users included</li>
                   <li>2 GB of storage</li>
                   <li>Email support</li>
                   <li>Help center access</li>
                </ul>
                  <div className="form-group form-check">
                    <button type="button" className="btn btn-lg btn-block btn-outline-primary">Activate</button>
                  </div>
             </div>
          </div>
        );
      })}
       </div>
    </div>

  </>;
  };
}

export default Plans;
