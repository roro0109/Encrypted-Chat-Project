import LoginForm from './LoginForm';
import RegisterFrom from './RegisterForm';
import { useState } from 'react';

const projectID = process.env.REACT_APP_CHAT_ENGINE_ID;

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