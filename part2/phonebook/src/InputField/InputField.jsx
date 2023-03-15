export const InputField = ({ label, state, onChange }) => (
    <div>
        <label htmlFor={label}>{label} </label>
        <input type="text" name={label} id={label} value={state} onChange={onChange} />
    </div>
)
