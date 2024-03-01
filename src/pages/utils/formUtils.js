export function handleInputChange(event, data, setData) {
    const { name, value, type, checked } = event.target
    setData(prevFormData => {
        return {
            ...prevFormData,
            [name]: type === 'checkbox' ? checked : value
        }
    })
}