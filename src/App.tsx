import { RadioButtonComponent, CheckBoxComponent} from '@syncfusion/ej2-react-buttons';
import './App.css';

function App() {
  return (
    <div className="App">
       <div className='radiobutton-control'>
          <h4>Select a payment method</h4>
          <div>
              <RadioButtonComponent label='Credit/Debit card' name='payment'
              checked={true}   cssClass='e-small' enableRtl={true}></RadioButtonComponent>
          </div>
          <div >
              <RadioButtonComponent label='Net Banking' name='payment'
              cssClass='e-small' enableRtl={true}></RadioButtonComponent>
          </div>
          <div >
              <RadioButtonComponent label='Cash on Delivery' name='payment'
              cssClass='e-small' enableRtl={true} disabled={true} ></RadioButtonComponent>
          </div>
          <div>
              <RadioButtonComponent label='Other Wallets' name='payment'
               cssClass='e-small' enableRtl={true}></RadioButtonComponent>
          </div>
        </div>
      <div className='checkbox-control'>
        <CheckBoxComponent label='Default' indeterminate={true} cssClass='e-small'
        enableRtl={true} disabled={true}></CheckBoxComponent>
      </div> 
    </div>
  );
}

export default App;
