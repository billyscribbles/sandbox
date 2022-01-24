import useSWR from 'swr';
import axios from 'axios';
import { axiosConfig } from '../../utils/config';

const fetcher = (url: string) => axios.get(url, axiosConfig).then(res => res.data);

export type IUser = {
    displayName: string;
    email: string;
    photoURL: string;
    restaurant: string;
};

export type IUseUser = {
    data: IUser;
    isLoading: boolean;
    isError: boolean;
};

export function useUser(): IUseUser {
    const { data, error } = useSWR('/accounts', fetcher);

    return {
        data: data,
        isLoading: !error && !data,
        isError: error
    };
}
