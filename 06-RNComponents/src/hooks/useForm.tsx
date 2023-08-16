import { useState } from 'react';


export const useForm = <T extends Object>(state: T) => {

    const [form, setForm] = useState(state);

    //En javascript todo es un objeto, entonces si yo hago un generico K que extiendiende Object
    //le estoy diciendo que el value que viene por parametro sea del tipo que le mando independientemente de cual sea
    //esto me permite por parametro mandar string o booleano que son los dos tipos que necesito para el state
    const handleChange = <K extends Object>(value: K, field: keyof T) => {
        setForm({
            ...form,
            [field]: value,
        });
    };

    return { form, handleChange };
};
