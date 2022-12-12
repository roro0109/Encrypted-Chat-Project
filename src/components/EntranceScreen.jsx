import LoginForm from './LoginForm';
import RegisterFrom from './RegisterForm';
import { useState } from 'react';

const projectID = '5a16c1de-ea4c-4c12-9b6c-172f530bf6a6';

const EntranceScreen = props => {
    const [isRegistering, setIsRegistering] = useState(false);
    const saveUserDetailHandler = enteredUserDetails => {
        const userDetails = enteredUserDetails
    };

    const startRegisteringHandler = () => {
        setIsRegistering(true);
    };
    const stopRegisteringHandler = () => {
        setIsRegistering(false);
    };
    return <div>
        {!isRegistering && <LoginForm projectID={projectID} startRegistering={startRegisteringHandler}/>}
        {isRegistering && <RegisterFrom projectID={projectID} onSaveUserDetails={saveUserDetailHandler} stopRegistering={stopRegisteringHandler}/>}
    </div>

}

export default EntranceScreen;