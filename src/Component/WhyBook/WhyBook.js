import React from 'react';
import './WhyBook.css';

const WhyBook = () => {
    return (
        <div className='why-book-container'>
            <h2 className="my-5">🌍 Why travel with <span className="adventure-world">Adventure World</span> team??</h2>
            <div>
                <div className="row row-cols-1 row-cols-md-4 g-2">
                    <div className="col">
                        <div className="card h-100">
                            <div className="card-body">
                                <h4 className="card-title pb-2 text-danger">Ultimate flexibility</h4>
                                <p className="card-text">You’re in control, with free cancellation and payment options to satisfy any plan or budget.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100">
                            <div className="card-body">
                            <h4 className="card-title pb-2 text-danger">Memorable experiences</h4>
                                <p className="card-text">Browse and book tours and activities so incredible, you’ll want to tell your friends.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100">
                            <div className="card-body">
                            <h4 className="card-title pb-2 text-danger">Quality at our core</h4>
                                <p className="card-text">High quality standards. Millions of reviews. A Tripadvisor company & High security.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100">
                            <div className="card-body">
                            <h4 className="card-title pb-2 text-danger">Award-winning support</h4>
                                <p className="card-text">New price? New plan? No problem. We’re here to help, 24/7. We're always besides you.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyBook;