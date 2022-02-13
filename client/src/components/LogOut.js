// import React, { useState } from 'react';
// import DefaultButton from '../buttons/DefaultButton';

// const LogOut = () => {
//     const user = localStorage.getItem(user);
//     const [email, setEmail] = useState(user.email);
//     const [password, setPassword] = useState(user.password);

//     const handleLogout = () => {
//         setUser({});
//         setEmail('');
//         setPassword('');
//         localStorage.clear();
//     };
//     return <>{user ? <DefaultButton onClick={ handleLogout} label="Log Out" /> : null}</>;
// };

// export default LogOut;