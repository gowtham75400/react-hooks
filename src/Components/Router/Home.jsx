import { useState } from "react"



const Home = () => {

    const [users,setUsers] = useState({
        name:"",
        age:"",
        email:"",
        contact:""
    });

    const handleChange = (e) =>{
        const {name,value} = e.target

        setUsers((curr)=>{
            return{
                ...curr,
                [name]:value
            }
        })

        
    }

    console.log(users);
    return (
        
        <div>
            <form>
                <label>Name</label>
                <br/>
                <input type="text" name="name" placeholder="Enter your name" value={users.name} onChange={handleChange}/>
                <br/>

                <label>Age</label>
                <br/>
                <input type="number" name="age" placeholder="Enter your Age" value={users.age} onChange={handleChange}/>
                <br/>

                <label>Email</label>
                <br/>
                <input type="text" name="email" placeholder="Enter your Email" value={users.email} onChange={handleChange}/>
                <br/>

                <label>Contact</label>
                <br/>
                <input type="number" name="contact" placeholder="Enter your Contact" value={users.contact}  onChange={handleChange}/>
                <br/>

                <button>ADD</button>
            </form>
        </div>
    )
}

export default Home