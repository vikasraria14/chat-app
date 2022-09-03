import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import './ToggleSwitch.css'
import {toggleUserIsActive} from '../../../Reducers/UserActiveReducer'
function SwitchExample() {
  const dispatch=useDispatch();
  const changeActive=()=>{
    dispatch(toggleUserIsActive())
  }
  return (
    <div className='switchChange'>
    <Form>
      
      <Form.Check 
        type="switch"
        id="custom-switch"
        label="Active"
        onChange={changeActive}
        
      />
      
    </Form>
    </div>
  );
}

export default SwitchExample;