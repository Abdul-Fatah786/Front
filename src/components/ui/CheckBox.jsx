
export const Checkbox = ({ label, checked = false, onChange }) => {
    return (
        <div className="checkbox-container">
            <input
                type="checkbox"
                checked={checked}
                onChange={onChange}
                className="checkbox-input"
            />
            {label && <label className="checkbox-label">{label}</label>}
        </div>
    );
};
