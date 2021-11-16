import React from 'react';
import Heart from '../../images/heart.jpg'
const Home = () => {
    return (
        <div className="container">
            <div className="row mt-5 pt-5">
                <div className="col-md-6">
                    <p> <h1 className="display-2">HEART CARE</h1></p>
                    <p>The Heart Care Heart Hospital have latest technology machines with experty Heart specialist doctors consectetur adipisicing elit. Distinctio vitae maiores enim ea atque? Natus iure autem cumque, quaerat distinctio pariatur velit illo hic a eos accusamus deleniti totam repellendus reiciendis, nobis vero dolorem nesciunt officia facere perspiciatis fugiat.<br /><br />

                        Sapiente accusamus repudiandae architecto corporis aspernatur. Eligendi, accusamus quas mollitia. Natus iure autem cumque, quaerat distinctio pariatur velit illo hic a eos accusamus deleniti totam repellendus reiciendis, nobis vero dolorem nesciunt officia facere perspiciatis fugiat.</p>
                </div>
                <div className="col-md-6">
                    <img className="img-fluid" src={Heart} alt="" />
                </div>

            </div>
        </div>
    );
};

export default Home;