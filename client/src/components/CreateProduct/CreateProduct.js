import { useForm } from '../../hooks/useForm';



 const CreateProduct = ({
    onCreateProductSubmit,
}) => {
    const { values, changeHandler, onSubmit } = useForm({
        title: '',
        brand: '',
        category: '',
        weigth: '',
        price:'',
        imageUrl: '',
    }, {} , onCreateProductSubmit);

    return (
        <section id="create-page" className="auth">
            <form id="create" method="post" onSubmit={onSubmit}>
                <div className="container">
                    <h1>Create Game</h1>

                    <label htmlFor="leg-title">Machine title:</label>
                    <input value={values.title} onChange={changeHandler} type="text" id="title" name="title" placeholder="Enter game title..." />

                    <label htmlFor="brand">Brand:</label>
                    <input value={values.brand} onChange={changeHandler} type="text" id="brand" name="brand" placeholder="Enter game category..." />

                    <label htmlFor="category">Category:</label>
                    <select
                        id="category"
                        name="category"
                        value={values.category}
                        onChange={changeHandler}
                        >
                        <option value="">Select...</option>
                        <option value="Drill machines">Drill machines</option>
                        <option value="Electrical screwdrivers">Electrical screwdrivers</option>
                        <option value="Rechargable kits">Rechargable kits</option>
                        <option value="Jig saws">Jig saws</option>
                        <option value="Grinders">Grinders</option>
                        <option value="Hand tools">Hand tools</option>
                    </select>

                    <label htmlFor="game-img">Weight:</label>
                    <input value={values.weigth} onChange={changeHandler} type="text" id="weigth" name="weigth" placeholder="1-100kg" />

                    <label htmlFor="price">Price:</label>
                    <input value={values.price} onChange={changeHandler} type="text" id="price" name="price" placeholder="0-1000 лв." />

                    <label htmlFor="game-img">Image:</label>
                    <input value={values.imageUrl} onChange={changeHandler} type="text" id="imageUrl" name="imageUrl" placeholder="Upload a photo..." />

                    <input className="btn submit" type="submit" value="Create Game" />
                </div>
            </form>
        </section>
    );
};

export default CreateProduct
