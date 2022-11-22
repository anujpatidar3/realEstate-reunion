import React from 'react';

//CSS Files
import '../../CSS/rent.css'
import 'bootstrap/dist/css/bootstrap.css';

//Card Component Material UI
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

//House Image
import home from "../../images/home.png";


const CardList = ({ houses }) => {
    return (
        <div className='container'>
            <div className='row justify-content-md-center '>
                {
                    houses.map(item => {
                        return (
                            <div key={item.name} className='col col-md-6 col-lg-4'>
                                <Card sx={{ maxWidth: 310 }} className="card-content-main justify-content-center">
                                    <CardMedia
                                        component="img"
                                        alt="green iguana"
                                        image={home}
                                    />
                                    <CardContent className='card-content-align'>
                                        <h5 className='card-price'>
                                            ${item.price}<h6 className='card-price-month'>/month</h6>
                                        </h5>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {item.name}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {item.location}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {item.type}
                                        </Typography>
                                    </CardContent>
                                    <CardContent className='card-icons'>
                                        <i className='fa fa-bed'> 3 Beds</i>
                                        <i className='fa fa-bath' style={{ margin: "0px auto" }}> 3 bathrooms</i>
                                        <i className='fa fa-envelope' style={{ margin: "0px auto" }}> 5x5 m<sup>2</sup></i>
                                    </CardContent>
                                </Card>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default CardList;