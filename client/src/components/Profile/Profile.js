import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import './profile.css'; 
import { PersonalDetails } from './components/PerosnalDetails';
import CreateProduct from '../CreateProduct/CreateProduct';


const Profile = ({
    onCreateProductSubmit,
    
}) => {
        return (
            <section className='profile-section'>
                <div className="container">
                    <Tabs
                        defaultActiveKey="profile"
                        id="fill-tab-example"
                        className="mb-3"
                        fill
                >
                    <Tab eventKey="personal-information" title="Personal Information">
                        <PersonalDetails/>
                    </Tab>
                    <Tab eventKey="profile" title="Add Product">
                        <CreateProduct onCreateProductSubmit={onCreateProductSubmit}/>
                    </Tab>
                    <Tab eventKey="your-products" title="Your Products">
                        Tab content for Loooonger Tab
                    </Tab>
                    <Tab eventKey="orders" title="Orders" >
                        Tab content for Contact
                    </Tab>
                    <Tab eventKey="comments" title="Comments" >
                        Tab content for Contact
                    </Tab>
                    </Tabs>
                </div>
            </section>
            
          )
}

export default Profile;