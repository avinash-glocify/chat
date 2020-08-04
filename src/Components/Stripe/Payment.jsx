import React from 'react';
import Api from '../../Api';
import '../../styles/stripe.css';
var style = {
  base: {
    color: '#32325d',
    fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
    fontSmoothing: 'antialiased',
    fontSize: '16px',
    '::placeholder': {
      color: '#aab7c4'
    }
  },
  invalid: {
    color: '#fa755a',
    iconColor: '#fa755a'
  }
};
class Payment extends React.Component {
  constructor(props) {
    super(props);
    this.state = { stripe:'', card:'' }
  }

  componentDidMount() {
    const stripe  = window.Stripe('pk_test_dhOU9HRfeP0GyF5tTZGpsE6900quYA293B');
    var elements = stripe.elements();
    var card = elements.create('card', {style: style});
    this.setState({card:card,stripe:stripe})
    card.mount('#card-element');
    card.on('change', function(event) {
    var displayError = document.getElementById('card-errors');
    if (event.error) {
      displayError.textContent = event.error.message;
    } else {
      displayError.textContent = '';
    }
  });
  }
  onSubmit = (e) => {
    e.preventDefault();
    const stripe  = this.state.stripe;
    var state  = this.state;
    stripe.createToken(this.state.card).then(function(result, state) {
      if (result.error) {
        var errorElement = document.getElementById('card-errors');
        errorElement.textContent = result.error.message;
      } else {
        Api.post('charge', {token:result.token.id, plan:3}).then((res) => {

        }).catch((error) => {

        });
      }
    });
  }
  render() {
    return <>
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 offset-3 mt-5">
          <div className="card">
            <div className="card-body">
              <form  id="payment-form">
               <div className="form-row">
                 <label>
                   Credit or debit card
                 </label>
                 <div id="card-element" style={{width:'100%'}}></div>
                 <div id="card-errors" role="alert"  style={{width:'100%'}}></div>
                 <div className="form-group mt-2">
                  <button type="button" onClick={this.onSubmit} className="btn btn-primary">Pay</button>
                 </div>
               </div>
              </form>
           </div>
         </div>
        </div>
      </div>
    </div>
  </>;
  };
}

export default Payment;
