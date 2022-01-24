import useSWR from 'swr';
import axios from 'axios';
import { axiosConfig } from '../../utils/config';
import { IMenuResult } from './menu.type';

const fetcher = (url: string) => axios.get(url, axiosConfig).then(res => res.data);

interface IGetMenuDetails {
    data: IMenuResult;
    isLoading: boolean;
    isError: boolean;
}

export function getMenuDetails(id: string): IGetMenuDetails {
    const { data, error } = useSWR(`/menus/${id}`, fetcher);

    return {
        data: data ? data : undefined,
        isLoading: !error && !data,
        isError: error
    };
}
