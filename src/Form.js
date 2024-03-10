import React from 'react';

function Form() {
    return (
        <div>
            <form>
                <input type="text" placeholder="Name" />
                <input type="text" placeholder="Phone" />
                <input type="text" placeholder="Nickname" />
                <input type="text" placeholder="Group" />
                <input type="dropdown" placeholder="Favorite?" />
                <option value="true">Yes</option>
                <option value="false">No</option>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Form;