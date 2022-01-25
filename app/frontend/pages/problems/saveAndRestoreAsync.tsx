import React, { useEffect, useState, useCallback } from 'react';
import styles from './saveAndRestore.module.css';

interface IFormData {
    title: string;
    body: string;
    id: string;
}

export default function saveAndRestoreAsync(): JSX.Element {
    const [formData, setFormData] = useState<IFormData>({ title: '', body: '', id: '' });
    const [previousFormData, setPreviousFormData] = useState<IFormData>({ title: '', body: '', id: '' });
    const [disableButton, setDisableButton] = useState<boolean>();

    useEffect(() => {
        console.clear();
        console.log(formData);
        console.log(previousFormData);
        console.log(disableButton);
    }, [formData, previousFormData, disableButton]);

    const fetchAPI = useCallback(async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
            const json = await response.json();
            setFormData(json);
            setPreviousFormData(json);
        } catch (error) {
            console.log(error);
        }
    }, []);

    const postAPI = useCallback(async (formData: IFormData) => {
        try {
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
        } catch (error) {
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
    const debounce = (fn: any, delay: number) => {
        let timer: NodeJS.Timeout;

        return function() {
            clearTimeout(timer);
            timer = setTimeout(() => {
                fn();
            }, delay);
        };
    };

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

    const handleOnChange = async function({ target: { name, value } }: React.ChangeEvent<HTMLInputElement>) {
        const myFormData: IFormData = {
            ...formData,
            [name]: value
        };
        await debounce(postAPI(myFormData), 1000);
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };

    return (
        <div className={styles.container}>
            <form onSubmit={handleSubmit}>
                <label>Title</label>
                <input
                    name="title"
                    defaultValue={formData.title}
                    onChange={handleOnChange}
                    className={styles.input}
                ></input>
                <label>Body</label>
                <input
                    name="body"
                    defaultValue={formData.body}
                    onChange={handleOnChange}
                    className={styles.input}
                ></input>
                <label>ID</label>
                <input name="id" defaultValue={formData.id} onChange={handleOnChange} className={styles.input}></input>
                <button type="submit" disabled={disableButton} className={styles.saveButton}>
                    Save
                </button>
            </form>
        </div>
    );
}
