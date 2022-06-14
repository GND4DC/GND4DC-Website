import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { imageData } from '../imageData';
import FALLBACK_IMAGE from '../assets/images/img-13.jpg'
import { Container } from '@mui/material';
import FALLBACK_MEDIA from '../assets/images/img-14.jpg';
import { Button,} from '@mui/material';



function AboutUs() {
    
    const onMediaFallreturn = event => event.target.src = FALLBACK_MEDIA;
    const onMediaFallback = event => event.target.src = FALLBACK_IMAGE;
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                </div>
            </div>
            <Container>
                <Card sx={{ mx: "auto", maxWidth: 800 }}>
                    <CardMedia
                        component="img"
                        height="auto"
                        max-width='100%'
                        image='/assets/images/img-12.jpg'
                        onError={onMediaFallback}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Our Mission
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Our mission is to bring the vision of a Green New Deal to the District by partnering with DC based organizations,
                            union leaders and community members. We believe that we will accomplish this through canvassing our community,
                            organizing events holding teachings having listening sessions and advocating to our elected officials the importance of bold DC based climate action.
                            If you are interested in adding your name click below!
                        </Typography>
                        <Button href='https://docs.google.com/forms/d/e/1FAIpQLSfCZAqZid1MUrUg-f_M4psSSDVxk28GyqHn5JbbMnmOAJ8eeQ/viewform' size="small">Add Your Name</Button>
                    </CardContent>
                </Card>
                <Card sx={{ mx: "auto", maxWidth: 800 }}>
                    <CardMedia
                        component="img"
                        height="200"
                        image='/assets/images/img-12.jpg'
                        onError={onMediaFallreturn}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Our Coalition
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Our partners that make up our coalition are essential to the work we do.
                            Different arrays of DC based organizations bring together different ideas,
                            perspectives and experiences that help us advocate for a DC Green New Deal.
                            We are always looking for adding partners! If your organization is interested
                            in joining our coalition or staying in contact with us click  below!
                        </Typography>
                        <Button href='https://docs.google.com/forms/d/e/1FAIpQLSfCZAqZid1MUrUg-f_M4psSSDVxk28GyqHn5JbbMnmOAJ8eeQ/viewform' size="small">Join Us</Button>
                    </CardContent>
                </Card>
            </Container>
            <div className='container' >
                <div className="row row-content">
                </div>
                <Container>
                    <Card sx={{ mx: "auto", maxWidth: 2000 }}>
                        <CardContent>
                            <Typography>
                                <h2>Our Partners</h2>
                                <ImageList sx={{ mx: "auto", maxWidth: 1000 }} cols={4} gap={4}>
                                    {imageData.map((item) => (
                                        <ImageListItem key={item.img}>
                                            <img
                                                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                                                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                                alt={item.title}
                                                loading="lazy"
                                            />
                                        </ImageListItem>
                                    ))}
                                </ImageList>
                            </Typography>
                        </CardContent>
                    </Card>
                </Container>
            </div>
        </div>
    );
}

export default AboutUs;


