import { useEffect, useState } from 'react';
import { getUserData } from './../https/index';
import { useDispatch } from 'react-redux';
import { removeUser, setUser } from '../redux/slices/userSlice';
import { useNavigate } from 'react-router-dom';


const useLoadData = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {

        const fetchUser = async () => {
            try {
                const { data } = await getUserData();
                console.log(data)
                const { id, name, email, phone, role } = data.data;
                dispatch(setUser({ id, name, email, phone, role }));
            } catch (error) {
                dispatch(removeUser());
                navigate("/auth")
                console.log(error)
            } finally {
                setIsLoading(false);
            }
        }

        fetchUser();
    }, [dispatch, navigate])
    
    return isLoading;
}

export default useLoadData;