import { useMutation } from "@tanstack/react-query"
import { registerEvent } from "./api"
import { toast } from "react-toastify"

export const useRegisterEvent = () => {
    return useMutation({
        mutationKey: ['registerEvent'],
        mutationFn: registerEvent,
        onSuccess: () => {
            toast('Event registered', { type: 'success' })
        },
        onError: (error) => {
            toast(error?.message || 'An error occurred', { type: 'error' })
        }
    })
}

