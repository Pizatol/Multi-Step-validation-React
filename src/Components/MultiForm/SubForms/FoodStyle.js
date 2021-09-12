import React, { useRef } from "react";
import "./SubForm.css";

export default function FoodStyle(props) {
    const preventFunc = (e) => {
		 e.preventDefault();
		 
		 const styleData = {
			 foodStyle: []
		 }

		 allCheckboxes.current.forEach(checkbox => {
			 if (checkbox.checked) {
				 styleData.foodStyle.push(checkbox.value)
			 }
		 })

		 props.modifyIndex(4, styleData)

	};
	
	const handleReturn = () => {
		props.modifyIndex(2)
	}



	const allCheckboxes = useRef([])
	const addCheck = (el) => {
		if (el && !allCheckboxes.current.includes(el)) {
			allCheckboxes.current.push(el)
		}
	}

    return (
        <form onSubmit={preventFunc} className="checkbox-form">
            <p>Quelles sont tes cuisines préférées ?</p>
            <span>Choix multiples</span>

            <label htmlFor="italian">Italienne</label>
			 <input ref={addCheck} type="checkbox" value="italian" id="italian" />
			 
			 <label htmlFor="japanese">Japonaise</label>
			 <input ref={addCheck} type="checkbox" value="japanese" id="japanese" />
			 
			 <label htmlFor="indian">Indienne</label>
			 <input ref={addCheck} type="checkbox" value="indian" id="indian" />

			 <label htmlFor="thai">Thaïlandaise</label>
			 <input ref={addCheck} type="checkbox" value="thai" id="thai" />

			 <label htmlFor="french">française</label>
			 <input ref={addCheck} type="checkbox" value="french" id="french" />

			 <label htmlFor="chinese">chinoise</label>
			 <input ref={addCheck} type="checkbox" value="chinese" id="chinese" />

			 <div className="container-nav-btns">
				 <button
					 onClick={handleReturn}
					 type='button'
					 className='prev'>Précédent</button>
			 	<button>Valider</button>
			 </div>

        </form>
    );
}
