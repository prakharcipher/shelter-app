import React from 'react';
import { Cursor } from 'react-bootstrap-icons';
import './index.scss'

const PropertyCard = (props) => {
    return (
        <div className="card-container">
            <div className="content-container">
                <div className="image-container">
                    <img width="100%" height="100%" alt="property" src="https://media.designcafe.com/wp-content/uploads/2020/02/21010329/modern-living-room-design-ideas-768x512.jpg" />
                </div>
                <div className="data-container">
                   <div className="text-box">
                        <div className="row1">
                            <div className="name">Bellevue Apartments</div>
                            <div className="rent">₹25000</div>
                        </div>
                        <div className="row2">
                            <div className="details">2 BHK . Fully Furnished</div>
                        </div>
                        <div className="row3">
                            <div className="locality">Sector 50, Gurgaon</div>
                            <div className="share-cta">
                                <div className="share-button">
                                    <div>Share</div>
                                    <div><Cursor style={{fontWeight: 'bold'}} /></div>
                                </div>
                            </div>
                        </div>
                   </div>
                </div>
            </div>
        </div>
    )
}

export default PropertyCard;