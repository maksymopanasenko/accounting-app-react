import EmployeesListItem from "../employees-list-item/employees-list-item";
import "./employees-list.css";

const EmployeesList = ({data, onDelete, onToggleAdv, onToggleInc}) => {

    const elements = data.map(item => {
        const {id, ...itemProps} = item;
        return (
            <EmployeesListItem
                key={id} 
                {...itemProps}
                onDelete={() => onDelete(id)}
                onToggleAdv={() => onToggleAdv(id)}
                onToggleInc={() => onToggleInc(id)}
            />
        );
    });

    return (
        <ul className='app-list list-group'>
            {elements}
        </ul>
    );
}

export default EmployeesList;