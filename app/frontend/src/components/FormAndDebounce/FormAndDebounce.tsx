import React, { useState, useEffect, useCallback } from 'react';
import { debounce } from 'lodash';

interface IFormData {
    name: string;
    phone: string;
    address: string;
}

function delay(timeout: number) {
    return new Promise(function(resolve) {
        setTimeout(resolve.bind(null), timeout);
    });
}

export const FormAndDebounce = function(): JSX.Element {
    const [formData, setFormData] = useState<IFormData>({ name: '', phone: '', address: '' });
    const [previousFormData, setPreviousFormData] = useState<IFormData>();
    // const [disableButton, setDisableButton] = useState<boolean>(true);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        getFormData();
    }, []);

    const getFormData = useCallback(
        async function() {
            try {
                const collectionID = localStorage.getItem('COLLECTIONID');

                if (collectionID !== '') {
                    setIsLoading(true);
                    await delay(2000);
                    const response = await fetch(`https://api.jsonbin.io/v3/b/${collectionID}`, {
                        headers: {
                            'X-Master-Key': '$2b$10$KXYcVLNGnE7e3ORJ720UKuIYNh1XNApJzxzeccON3PxbKzuQ1TFj2'
                        }
                    });

                    const json = await response.json();
                    setFormData(json.record);
                    setPreviousFormData(json.record);
                    setIsLoading(false);
                }
            } catch (error) {
                console.log(error);
            }
        },
        [formData, previousFormData]
    );

    const postFormData = useCallback(
        async function(myFormData: IFormData) {
            try {
                setIsLoading(true);
                await delay(2000);
                const response = await fetch('https://api.jsonbin.io/v3/b', {
                    method: 'POST',
                    body: JSON.stringify(myFormData),
                    headers: {
                        'Content-type': 'application/json; charset=UTF-8',
                        'X-Master-Key': '$2b$10$KXYcVLNGnE7e3ORJ720UKuIYNh1XNApJzxzeccON3PxbKzuQ1TFj2'
                    }
                });

                const json = await response.json();

                const collectionID = json.metadata?.id;
                console.log(json);
                setPreviousFormData(json.record);
                localStorage.setItem('COLLECTIONID', collectionID);
                setIsLoading(false);
            } catch (error) {
                console.log(error);
            }
        },
        [previousFormData]
    );

    const handleSubmit = useCallback(
        function(e: React.SyntheticEvent) {
            e.preventDefault();
            postFormData(formData);
        },
        [formData]
    );

    const handleInput = useCallback(
        debounce(function(e: React.ChangeEvent<HTMLInputElement>) {
            const name = e.target.name;
            const value = e.target.value;

            const myFormData: IFormData = {
                ...formData,
                [name]: value
            };

            if (JSON.stringify(myFormData) === JSON.stringify(previousFormData)) {
                return;
            }
            // ? setDisableButton(true)
            // : setDisableButton(false);

            postFormData(myFormData);
            setFormData(myFormData);
        }, 500),
        [formData, previousFormData]
    );

    return (
        <div>
            <h1>Sample Form</h1>
            <form onSubmit={handleSubmit}>
                <label>Name</label>
                <input name="name" onChange={handleInput} defaultValue={formData.name}></input>
                <label>Phone</label>
                <input name="phone" onChange={handleInput} defaultValue={formData.phone}></input>
                <label>Address</label>
                <input name="address" onChange={handleInput} defaultValue={formData.address}></input>
                {isLoading && <p>Saving...</p>}
                {/* <button type="submit" disabled={disableButton}>
                    Submit
                </button> */}
            </form>
        </div>
    );
};

export default React.memo(FormAndDebounce);
