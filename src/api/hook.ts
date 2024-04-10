import { useMutation } from "@tanstack/react-query"
import { registerEvent } from "./api"
import { toast } from "react-toastify"
import { AxiosError } from "axios"

export const useRegisterEvent = () => {
    return useMutation({
        mutationKey: ['registerEvent'],
        mutationFn: registerEvent,
        onSuccess: () => {
            toast('Event registered', { type: 'success' })
        },
        onError: (error: AxiosError<any>) => {
            toast(error?.response?.data?.message || 'An error occurred', { type: 'error' })
        }
    })
}

