import React, {useState} from 'react';
import EditTask from '../modals/EditTask'
import SearchTask from '../modals/SearchTask';

const Card = ({taskObj, index, deleteTask, updateListArray}) => {
    const [modal, setModal] = useState(false);
    const [searchModal, setSearchModal] = useState(false);

    const colors = [
        {
            primaryColor : "#5D93E1",
            secondaryColor : "#ECF3FC"
        },
        {
            primaryColor : "#F9D288",
            secondaryColor : "#FEFAF1"
        },
        {
            primaryColor : "#5DC250",
            secondaryColor : "#F2FAF1"
        },
        {
            primaryColor : "#F48687",
            secondaryColor : "#FDF1F1"
        },
        {
            primaryColor : "#B964F7",
            secondaryColor : "#F3F0FD"
        }
    ]

    const toggle = () => {
        setModal(!modal);
    }

    const handleSearch = () => {
        setSearchModal(true);
    };

    const updateTask = (obj) => {
        updateListArray(obj, index)
    }

    const handleDelete = () => {
        deleteTask(index)
    }

    return (
        <div class = "card-wrapper mr-5">
            <div class = "card-top" style={{"background-color": colors[index%5].primaryColor}}></div>
            <div class = "task-holder">
                <span class = "card-header" style={{"background-color": colors[index%5].secondaryColor, "border-radius": "10px", "display":"inline-block", "max-Width":"100px", "overflow":"hidden", "white-space":"nowrap", "text-overflow":"ellipais"}}>{taskObj.Name}</span>
                <p className = "mt-3" style={{"display":"inline-block", "max-Width":"100px", "overflow":"hidden", "white-space":"nowrap", "text-overflow":"ellipais"}}>{taskObj.Description}</p>

                <div style={{"position": "absolute", "right" : "20px", "bottom" : "20px"}}>
                    <i class = "fa-brands fa-searchengin mr-3" style={{"color" : colors[index%5].primaryColor, "cursor" : "pointer"}} onClick = {handleSearch}></i>
                    <i class = "far fa-edit mr-3" style={{"color" : colors[index%5].primaryColor, "cursor" : "pointer", "padding" : "10px"}} onClick = {() => setModal(true)}></i>
                    <i class="fas fa-trash-alt" style = {{"color" : colors[index%5].primaryColor, "cursor" : "pointer"}} onClick = {handleDelete}></i>
                </div>
        </div>
        <EditTask modal = {modal} toggle = {toggle} updateTask = {updateTask} taskObj = {taskObj}/>
        <SearchTask modal={searchModal} toggle={() => setSearchModal(!searchModal)} taskObj={taskObj} />
        </div>
    );
};

export default Card;