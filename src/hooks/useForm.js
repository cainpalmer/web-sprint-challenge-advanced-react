// write your custom hook here to control your checkout form
import {useState} from 'react';

const useForm = () => {
    const [values, setValues] = useState('');

    const handleChanges = (event) => {
        setValues({...values, [event.target.name]: event.target.value});
    };

    return [values, handleChanges];
}

export default useForm;