


const AddCountry = () => {


    const handleAddCountry =(e)=>{
        e.preventDefault();
        const country_name=e.target.country_name.value;
        const image =e.target.image.value;
        const description =e.target.description.value;

        const country={country_name,image,description}
       

        fetch(`http://localhost:5000/country`,{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(country)
        })
        .then(res=>res.json())
        .then(data=>{
           if(data.insertedId){
            alert('Success')
           }
        })
    }
    return (
        <div className='min-h-[calc(100vh-266px)] flex justify-center items-center'>
             <form onSubmit={handleAddCountry} className=' w-lg bg-amber-400 p-10 rounded-2xl'>

                <legend className="fieldset-legend text-black">Name</legend>
             <input type="text" name='country_name' className="input w-full rounded-full p-8 border-none" placeholder="Country Name" />
             <legend className="fieldset-legend text-black">Image</legend>
             <input type="text" name='image' className="input w-full rounded-full p-8 border-none" placeholder="Photo URL" />

             <legend className="fieldset-legend text-black">Description</legend>
             <textarea placeholder="Description" name='description' className="textarea textarea-success rounded-2xl p-8 border-none w-full"></textarea>
             
            <input type="submit" className='block cursor-pointer bg-black text-lg py-3 rounded-full text-white w-full mt-10' value="Add" />
             </form>

             
        </div>
    );
};

export default AddCountry;