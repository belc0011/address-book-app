import React from 'react';
import NavBar from './NavBar';

function Form() {
    return (
        <div>
            <header>
                <NavBar />
            </header>
            <main>
                <form>
                    <label for="name">Name</label>
                    <div>
                        <input type="text" placeholder="New contact name" id="name" />
                    </div>
                    <label for="phone">Phone</label>
                    <div>
                        <input type="text" placeholder="New contact phone" />
                    </div>
                    <label for="nickname">Nickname</label>
                    <div>
                        <input type="text" placeholder="Nickname" />
                    </div>
                    <label for="group">Group</label>
                    <div>
                        <select type="dropdown" id="group">
                            <option value="friends">Friends</option>
                            <option value="family">Family</option>
                            <option value="in-laws">In-Laws</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                    <label for="favorite">Favorite?</label>
                    <div>
                    <select type="dropdown" id="favorite">
                        <option value="true">Yes</option>
                        <option value="false">No</option>
                    </select>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </main>
        </div>
    )
}

export default Form;