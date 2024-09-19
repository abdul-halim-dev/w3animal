 
const Mostview = () => {
    return (
        <div className='most_view_post_wrapper'>
        <h1>Most Viewed Post</h1>
        <div className="post_card">
            <div className="image_box">
                <img src="http://localhost:5173/src/data/img/bird/bird4.jpg" alt="" />
            </div>
            <div className="post_info">
                <h3>Lorem ipsum dolor sit amet</h3>
            </div>
        </div>
        <div className="post_card">
            <div className="image_box">
                <img src="http://localhost:5173/src/data/img/bird/bird2.avif" alt="" />
            </div>
            <div className="post_info">
                <h3>Lorem ipsum dolor sit amet</h3>
            </div>
        </div>
        <div className="post_card">
            <div className="image_box">
                <img src= " http://localhost:5173/src/data/img/bird/bird1.jpg" alt="" />
            </div>
            <div className="post_info">
                <h3>Lorem ipsum dolor sit amet</h3>
            </div>
        </div>
        <div className="post_card">
            <div className="image_box">
                <img src= "http://localhost:5173/src/data/img/bird/bird3.jpg" alt="" />
            </div>
            <div className="post_info">
                <h3>Lorem ipsum dolor sit amet</h3>
            </div>
        </div>
    </div>
    );
};

export default Mostview;