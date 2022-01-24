import React, { useEffect, useState } from 'react';

interface IFormData {
    title: string;
    body: string;
    id: string;
}

export default function saveAndRestore(): JSX.Element {
    const [formData, setFormData] = useState<IFormData>({ title: '', body: '', id: '' });
    const [previousFormData, setPreviousFormData] = useState<IFormData>({ title: '', body: '', id: '' });
    const [disableButton, setDisableButton] = useState<boolean>();

    useEffect(() => {
        console.clear();
        console.log(formData);
        console.log(previousFormData);
        console.log(disableButton);
    }, [formData, previousFormData, disableButton]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts/1')
            .then(response => response.json())
            .then(json => {
                //If data found set form data and previous form data
                setFormData(json);
                setPreviousFormData(json);
            });
    }, []);

    useEffect(() => {
        JSON.stringify(formData) === JSON.stringify(previousFormData)
            ? setDisableButton(true)
            : setDisableButton(false);
    }, [formData, previousFormData, disableButton]);

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

        const formData: IFormData = {
            title: title,
            body: body,
            id: id
        };

        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            }
        })
            .then(response => response.json())
            .then(json => {
                setPreviousFormData(json);
                setFormData(json);
            });
    };

    const handleOnChange = function({ target: { name, value } }: React.ChangeEvent<HTMLInputElement>) {
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>Title</label>
            <input name="title" defaultValue={formData.title} onChange={handleOnChange}></input>
            <label>Body</label>
            <input name="body" defaultValue={formData.body} onChange={handleOnChange}></input>
            <label>ID</label>
            <input name="id" defaultValue={formData.id} onChange={handleOnChange}></input>
            <button type="submit" disabled={disableButton}>
                Save
            </button>
        </form>
    );
}
