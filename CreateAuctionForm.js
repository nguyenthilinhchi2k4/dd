import React, { useState } from 'react';
import '../../css/CreateAuction.css';

function CreateAuctionForm() {
    const [images, setImages] = useState([null, null, null]);

    const handleImageChange = (index, event) => {
        const file = event.target.files[0];
        if (file) {
            const newImages = [...images];
            newImages[index] = URL.createObjectURL(file);
            setImages(newImages);
        }
    };

    const triggerFileInput = (index) => {
        document.getElementById(`fileInput${index}`).click();
    };

    return (
        <div className="form-container">
            <h2 className="form-title">Create New Auction</h2>
            <form className="auction-form">
                <input type="text" placeholder="Auction title" className="input-field title" />
                <select className="input-field category">
                    <option value="">Category</option>
                    <option value="Electronics">Electronics</option>
                    <option value="Furniture">Furniture</option>
                    <option value="Antiques">Antiques</option>
                    <option value="Collectibles">Collectibles</option>
                    <option value="Art">Art</option>
                    <option value="Fashion">Fashion</option>
                </select>
                
                <textarea placeholder="Description" className="input-field description"></textarea>
                
                <div className="image-upload">
                    {images.map((image, index) => (
                        <div key={index} className="image-placeholder" onClick={() => triggerFileInput(index)}>
                            {image ? <img src={image} alt={`Upload Preview ${index + 1}`} /> : null}
                            <input
                                type="file"
                                id={`fileInput${index}`}
                                style={{ display: 'none' }}
                                onChange={(event) => handleImageChange(index, event)}
                            />
                        </div>
                    ))}
                </div>

                <input type="number" placeholder="Starting price" className="input-field starting-price" />
                <input type="number" placeholder="Bid increment" className="input-field bid-increment" />
                
                <div className="auction-duration-section">
                    <label className="auction-duration-label">Auction Duration</label>
                    <input type="date" className="input-field auction-duration" />
                </div>

                <div className="shipping-method-section">
                    <label className="shipping-method-label">Shipping Method</label>
                    <input type="text" placeholder="Enter shipping method" className="input-field shipping-method" />
                </div>
                
                <button type="submit" className="submit-button">Create Auction</button>
            </form>
        </div>
    );
}

export default CreateAuctionForm;
