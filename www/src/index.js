export default App = {
    initialize: function() {
        if (localStorage.getItem("water") === null) {
            window.open('profile.html');
        }
        else{
            window.open('hydrate.html');
        }
    }
}

import {App} from './index';
app.initialize();

