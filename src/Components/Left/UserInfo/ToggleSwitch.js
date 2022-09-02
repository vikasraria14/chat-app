import Form from 'react-bootstrap/Form';
import './ToggleSwitch.css'
function SwitchExample() {
  const nothing=()=>{

  }
  return (
    <div className='switchChange'>
    <Form>
      
      <Form.Check 
        type="switch"
        id="custom-switch"
        label="Active"
        onChange={nothing}
        checked
      />
      
    </Form>
    </div>
  );
}

export default SwitchExample;