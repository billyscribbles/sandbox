import React, { useEffect, useState, useCallback } from 'react';
import { debounce } from 'lodash';
import styles from './saveAndRestore.module.css';

interface IFormData {
    title: string;
    body: string;
    id: string;
}

export default function saveAndRestoreAsync(): JSX.Element {
    const [formData, setFormData] = useState<IFormData>({ title: '', body: '', id: '' });
    const [previousFormData, setPreviousFormData] = useState<IFormData>();
    const [disableButton, setDisableButton] = useState<boolean>();
    const [isLoading, setIsLoading] = useState<boolean>(false);

    // useEffect(() => {
    //     console.clear();
    //     console.log(formData);
    //     console.log(previousFormData);
    //     console.log(disableButton);
    // }, [formData, previousFormData, disableButton]);

    function delay(timeout: number) {
        return new Promise(function(resolve) {
            setTimeout(resolve.bind(null), timeout);
        });
    }
    const fetchAPI = useCallback(async () => {
        try {
            setIsLoading(true);
            await delay(2000);
            const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
            const json = await response.json();
            setFormData(json);
            setPreviousFormData(json);
            setIsLoading(false);
        } catch (error) {
            setIsLoading(false);
            console.log(error);
        }
    }, []);

    const postAPI = useCallback(async (formData: IFormData) => {
        try {
            setIsLoading(true);
            await delay(2000);
            const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                body: JSON.stringify(formData),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8'
                }
            });
            const json = await response.json();
            setFormData(json);
            setPreviousFormData(json);
            setIsLoading(false);
        } catch (error) {
            setIsLoading(false);
            console.log(error);
        }
    }, []);

    useEffect(() => {
        fetchAPI();
    }, []);

    useEffect(() => {
        JSON.stringify(formData) === JSON.stringify(previousFormData)
            ? setDisableButton(true)
            : setDisableButton(false);
    }, [formData, previousFormData, disableButton]);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    // const debounceHook = (fn: any, delay: number) => {
    //     let timer: NodeJS.Timeout;

    //     return function() {
    //         clearTimeout(timer);
    //         timer = setTimeout(() => {
    //             fn();
    //         }, delay);
    //     };
    // };

    const handleSubmit = function(e: React.SyntheticEvent) {
        e.preventDefault();
        const target = e.target as typeof e.target & {
            title: { value: string };
            body: { value: string };
            id: { value: string };
        };

        const title = target.title.value;
        const body = target.body.value;
        const id = target.id.value;

        const myFormData: IFormData = {
            title: title,
            body: body,
            id: id
        };

        postAPI(myFormData);
    };

    const debouncedHandleOnChange = debounce(async function({
        target: { name, value }
    }: React.ChangeEvent<HTMLInputElement>) {
        const myFormData: IFormData = {
            ...formData,
            [name]: value
        };

        if (JSON.stringify(myFormData) === JSON.stringify(previousFormData)) return;

        await postAPI(myFormData);
        setFormData(prevState => ({ ...prevState, [name]: value }));
    },
    500);

    return (
        <div className={styles.container}>
            <form onSubmit={handleSubmit}>
                <label>Title</label>
                <input
                    name="title"
                    defaultValue={formData.title}
                    onChange={debouncedHandleOnChange}
                    className={styles.input}
                ></input>
                <label>Body</label>
                <input
                    name="body"
                    defaultValue={formData.body}
                    onChange={debouncedHandleOnChange}
                    className={styles.input}
                ></input>
                <label>ID</label>
                <input
                    name="id"
                    defaultValue={formData.id}
                    onChange={debouncedHandleOnChange}
                    className={styles.input}
                ></input>
                {previousFormData !== undefined && isLoading && <p>Saving...</p>}
                {/* <button type="submit" disabled={disableButton} className={styles.saveButton}>
                    Save
                </button> */}
            </form>
        </div>
    );
}
