import { useContext } from 'react';
import AuthContext from 'src/shared/contexts/JWTAuthContext';

const useAuth = () => useContext(AuthContext);

export default useAuth;
