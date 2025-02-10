import React, { useState } from 'react';

function SingleCat({ name, latinName, image }) {
    return (
        <li>
            <img src={image} alt={`${name}`} width="150" />
            <h3>{name}</h3> <span>{latinName}</span>
            <button onClick={() => onDeleteCat(id)}>
                Delete
            </button>
        </li>
    );
}
function AddCatForm({onAddCat}){
    const [name, setName] = useState('');
    const [latinName, setLatinName] = useState('');
    const [image, setImage] = useState('')

    const handleSubmit = (e) =>{
        e.preventDefault();
        if (!name || !latinName || !image) return; // prevents empty input
        onAddCat({name, latinName, image})
    }
    return (
        <div className='AddCatForm componentBox'>
            <form onSubmit={handleSubmit}>
                <label>
                    Cat Name: 
                    <input name='name' type='text' value ={name} onChange={e => setName(e.target.value)}/>
                </label>
                <label>
                    Cat Latin Name: 
                    <input name='latin-name' type='text' value ={latinName} onChange={e => setLatinName(e.target.value)}/>
                </label>
                <label>
                    Cat Image: 
                    <input name='image' type='text' value ={image} onChange={e => setImage(e.target.value)}/>
                </label>
                <button>Add Cat</button> 
            </form>
        </div>
    )
}
const BigCats = () => {
    const initialCats = [
        { id: 1, name: 'Cheetah', latinName: 'Acinonyx jubatus', image: 'https://cdn.britannica.com/01/152301-050-1EF6EBB4/Cheetah.jpg' },
        { id: 2, name: 'Cougar', latinName: 'Puma concolor', image: 'https://www.wildgratitude.com/wp-content/uploads/2024/01/cougar-power-animal.jpg.webp' },
        { id: 3, name: 'Jaguar', latinName: 'Panthera onca', image: 'https://i.natgeofe.com/n/f0f82293-9f3d-4424-be23-4c7196f7ca0c/jaguar_2x1.JPG' },
        { id: 4, name: 'Leopard', latinName: 'Panthera pardus', image: 'https://images.squarespace-cdn.com/content/v1/66ec3b49803ab81bf84f89e4/f8a0e784-afef-4eaa-a21f-b65b15ab3bdd/LeopardCheetaroDSC_6986.jpg' },
        { id: 5, name: 'Lion', latinName: 'Panthera leo', image: 'https://cdn.britannica.com/29/150929-050-547070A1/lion-Kenya-Masai-Mara-National-Reserve.jpg' },
        { id: 6, name: 'Snow leopard', latinName: 'Panthera uncia', image: 'https://a-z-animals.com/media/2022/11/shutterstock_337950614-1024x819.jpg' },
        { id: 7, name: 'Tiger', latinName: 'Panthera tigris', image: 'https://transforms.stlzoo.org/production/animals/amur-tiger-01-01.jpg?w=1200&h=630&q=82&auto=format&fit=clip&dm=1658935145&s=3f977c2779afe21880458218dd6e16ba' },
    ];

    const [currentCats, setCurrentCats] = useState(initialCats);

    // Reverse Order
    const handleReverseCats = () => {
        setCurrentCats([...currentCats].reverse()); // Correctly reversing without mutating the original state
    };
    // Sort Alphabetically
    const handleSortAlphabetically = () => {
        setCurrentCats([...currentCats].sort((a, b) => a.name.localeCompare(b.name)));
    };
    // Filter only cats in the Panthera family
    const handleFilterCats = () => {
        const filteredCats = initialCats.filter(cat => cat.latinName.startsWith("Panthera"));
        setCurrentCats(filteredCats);
    };

    // Reset the list to its original state
    const handleResetList = () => {
        setCurrentCats(initialCats);
    };
    // Add Cat
    const handleAddCat = (newCat) => {
        setCurrentCats(prevCats => [
            ...prevCats, 
            { id: prevCats.length + 1, ...newCat } 
        ]);
    }
    // Delete a cat
    const handleDeleteCat = (id) => {
        setCurrentCats(prevCats => prevCats.filter(cat => cat.id !== id));
        };
    return (
        <div className="BigCats componentBox">
            <ul>
                {currentCats.map(cat => (
                    <SingleCat 
                    key={cat.id} 
                    name={cat.name} 
                    latinName={cat.latinName} 
                    image={cat.image}
                    onDeleteCat={handleDeleteCat} />
                ))}
            </ul>
            <button onClick={handleReverseCats}>Reverse Cats</button>
            <button onClick={handleSortAlphabetically}>Sort Alphabetically</button>
            <button onClick={handleFilterCats}>Filter Cats by "Panthera" latin name</button>    
            <button onClick={handleResetList}>Reset List</button>
            {" "}
            <AddCatForm onAddCat={handleAddCat}/>
        </div>
    );
};

export default BigCats;