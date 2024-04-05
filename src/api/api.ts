import { toast } from 'react-toastify';
import axios from './axios'
import path from './path';

export const registerEvent = (data: any) =>
    new Promise((resolve, reject) => {
        toast.loading('Registering for event', { toastId: 'loading' })
        axios
            .post(`${path.REGISTER_FOR_EVENT}`, { ...data })
            .then((res) => resolve(res.data))
            .catch((err) => reject(err))
            .finally(() => {
                toast.dismiss('loading')

            })
    });
