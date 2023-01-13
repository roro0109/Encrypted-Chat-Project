import LoginForm from './LoginForm';
import RegisterFrom from './RegisterForm';
import { useState } from 'react';

const projectID = 'a835b881-cb1e-45cf-8585-8fb5502bc8b1';

const EntranceScreen = props => {
    const [isRegistering, setIsRegistering] = useState(false);

    const startRegisteringHandler = () => {
        setIsRegistering(true);
    };
    const stopRegisteringHandler = () => {
        setIsRegistering(false);
    };
    return <div>
        {!isRegistering && <LoginForm projectID={projectID} startRegistering={startRegisteringHandler}/>}
        {isRegistering && <RegisterFrom projectID={projectID} stopRegistering={stopRegisteringHandler}/>}
    </div>

}

export default EntranceScreen;