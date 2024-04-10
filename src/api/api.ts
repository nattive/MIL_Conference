import { toast } from 'react-toastify';
import axios from './axios'
import path from './path';

type RegisterEventReturn = {
    fullName: string
    email: string
    gender: string
    code: string
    qrCode: string
    mobileNumber: string
    checkInDates: string
    createdAt: string
    updatedAt: string
    id: string
    event: {
        createdBy:string
        title: string
        description: string
        eventDates: string[],
        expressionId:  {
            name: string;
            logo: string;
            createdAt: string;
            updatedAt: string;
            address: string;
            backgroundColor: string;
            facebookUrl: string;
            instagramUrl: string;
            latitude: number;
            linkedinUrl: string;
            longitude: number;
            id: string;
        },
        image: string;
        canRsvp: string;
        createdAt: string;
        updatedAt: string;
        updatedBy: string;
        id: string
    },
    expressions: string[]
}

export const registerEvent: (data: any) => Promise<RegisterEventReturn> = (data: any) =>
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
