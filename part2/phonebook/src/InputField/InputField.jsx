import "./InputField.css";

export const InputField = ({ label, state, onChange }) => (
	<div className="input">
		<label htmlFor={label}>{label} </label>
		<input
			type="text"
			name={label}
			id={label}
			value={state}
			onChange={onChange}
            className='textfield'
		/>
	</div>
);
