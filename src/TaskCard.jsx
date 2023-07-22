function TaskCard(props){

    const {title, initialDate, description, image, deadline} = props;



    return(

        <div className='card'>
            <div className='card-header'>
                <h2>
                    {title}
                </h2>
                <p>
                    {initialDate}
                </p>
            </div>

            <div className='card-body'>
                <div className='image-container'>
                    <img src={image} alt={title}/>
                </div>

                <p className='description'>
                    {description}
                </p>
            </div>

            <div className='card-footer'>
                {deadline}
            </div>
        </div>


    )


}

export default TaskCard