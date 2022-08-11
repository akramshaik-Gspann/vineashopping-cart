import React from 'react'
import '../../assets/scss/Filter.css';
import { useLocation } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

function Filter() {
    const location = useLocation();
    const navigate = useNavigate();
    const { pathname } = location;

    const filterHandler = (checked, path) => {
        if (checked) {
            return navigate(path)
        }
        return null;
    }
    return (
        <div className='filterone'>
            <div className='filter'>
                <h6>Filters</h6>
            </div>
            <hr />
            <div className='attribute'>
                <h6>Categories</h6>
                <label><input type="checkbox" onChange={(e) => filterHandler(e.target.checked,"/women" )} checked={pathname == "/women"} id="option" name="option" value="option" />&nbsp;Women</label> 
                <label><input type="checkbox" onChange={(e) => filterHandler(e.target.checked,"/men" )} checked={pathname == "/men"} id="option" name="option" value="option" />&nbsp;Men</label> 
                <label><input type="checkbox" onChange={(e) => filterHandler(e.target.checked,"/jewellery" )} checked={pathname == "/jewellery"} id="option" name="option" value="option" />&nbsp;Jewelery</label> 
                <label><input type="checkbox" onChange={(e) => filterHandler(e.target.checked,"/electronics" )} checked={pathname == "/electronics"} id="option" name="option" value="option" />&nbsp;Electronics</label> 
                <hr />
            </div>
        </div>



    )
}
export default Filter



// import * as React from "react";
// import { useState } from "react";
// import { useForm } from "react-hook-form";
// import '../../assets/scss/Filter.css';
// const onChange = (event) => {
//   console.log("change", event.target.value);
// };

// export default function Filter() {
//     const [selectCatagory, setSelectCatagory] = useState([]);
//     const { register, handleSubmit, errors, watch, formState } = useForm();
//     const onSubmit = (data) => console.log(data);

//     console.log("isValid", formState.isValid);
//     console.log("values", watch());
//     console.log("errors", errors);
//     const onChange = (e) => {
//         console.log("test", e.target.checked);
//         if (e.target.checked) {
//             setSelectCatagory([...selectCatagory, e.target.value]);
//         } else {
//             console.log("selectCatagory", selectCatagory);
//             const selectedArray = selectCatagory.filter((a) => a !== e.target.value);
//             setSelectCatagory(selectedArray);
//         }
//         console.log("selectCatgory", selectCatagory);
//     };

//     console.log("selectCatgory", selectCatagory);
//     return (

//         <div className='filterone'>
//             <div className='filter'>
//                 <h6>Filters</h6>
//             </div>
//             <hr />
//             <div className='attribute'>
//                 <h6>Categories</h6>
//                 <form onSubmit={handleSubmit(onSubmit)}>
//                     <label>
//                         <input
//                             name="category"
//                             type="checkbox"
//                             value="Women"
//                             onChange={onChange}
//                             {...register("message",{required: "Please select categories" })}
//                         />{" "}
//                         Women
//                     </label>
//                     <label>
//                         <input
//                             name="category"
//                             type="checkbox"
//                             value="Men"
//                             onChange={onChange}
//                             {...register("message",{required: "Please select categories" })}
//                         />{" "}
//                         Men
//                     </label>
//                     <label>
//                         <input
//                             name="category"
//                             type="checkbox"
//                             value="Jewellery"
//                             onChange={onChange}
//                             {...register("message",{required: "Please select categories" })}
//                         />{" "}
//                         Jewellery
//                     </label>
//                     <label>
//                         <input
//                             name="category"
//                             type="checkbox"
//                             value="Electronics"
//                             onChange={onChange}
//                             {...register("message",{required: "Please select categories" })}
//                         />{" "}
//                         Electronics
//                     </label>

//                     {errors.category && <p>{errors.category.message}</p>}
//                     <input type="submit" />
//                 </form>
//             </div>
//         </div>
//     );
// }
