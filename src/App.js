import Navbar from "./Navbar";
import images from "./images"
import TaskCard from "./TaskCard";
import {Container} from "./Utils";

const description_mask = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do" +
    " eiusmod tempor incididunt ut labore et dolore magna aliqua. " +
    "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "


// title, initialDate, taskImage, description, deadlineDate

function App() {
    return (
        <div className="App">
            {/*    navbar goes here*/}
            <Container>
                <Navbar/>
                <TaskCard title="task 1" description={description_mask} initialDate="2020/10/12" deadline="2020/11/12"
                          image={images.taskImage}/>

            </Container>

        </div>
    );
}

export default App;