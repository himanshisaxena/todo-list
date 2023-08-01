import { data } from "./data.js";
import { dom } from "./dom.js";
import createItems from "./components/createItem.js";

// add default data

data.tasks.forEach((task) => {
    const newTask = createItems(task);
    dom.itemList.append(newTask);

})

import './events/clearBtnListener.js'
import './events/inputListener.js'
import './events/submitBtnListener.js'







