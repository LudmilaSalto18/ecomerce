import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FilterCategoriesThunk, FilterInputThunk, getNewProductsThunk } from '../store/slices/products.slice';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Button, InputGroup, Form, Row, Col, ListGroup, ListGroupItem, Card } from 'react-bootstrap';

const Home = () => {
    const products = useSelector(state => state.products)
    const [categoriesList, setCategoriesList] = useState([])
    const [inputSearch, setInputSearch] = useState('')
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getNewProductsThunk())
        axios.get('https://e-commerce-api-v2.academlo.tech/api/v1/categories')
            .then(res => setCategoriesList(res.data))
    }, [])
    console.log(categoriesList)
    return (
        <div>
            <Row>
                {/*Categories */}
                <Col lg={3}>
                    <ListGroup>
                        {
                            categoriesList.map(category => (
                                <ListGroupItem
                                    onClick={() => dispatch(FilterCategoriesThunk(category.id))}
                                    style={{ cursor: 'pointer' }}
                                >
                                    {category.name}
                                </ListGroupItem>

                            ))

                        }
                    </ListGroup>


                </Col>

                <Col lg={9} >
                    <h1>Home</h1>
                    <InputGroup className="mb-3">
                        <Form.Control
                            placeholder="Recipient's username"
                            aria-label="Recipient's username"
                            aria-describedby="basic-addon2"
                            value={inputSearch}
                            onChange={(e) => setInputSearch(e.target.value)}
                        />
                        <Button variant="outline-secondary" id="button-addon2"
                            onClick={() => dispatch(FilterInputThunk(inputSearch))}
                        >
                            Search
                        </Button>
                    </InputGroup>


                </Col>

                <Row xs={1} md={2} lg={3} className='g-4'>
                    {
                        products.map(product => (
                            <Col key={product.id}>
                                <Card style={{ height: 350, background: 'white' }}>
                                    <Link to={`/products/${product.id}`} style={{ textDecoration: 'none' }} > {product.title}</Link>
                                    <Card.Img
                                        variant='top'
                                        src={product.images[0].url} style={{ height: 200, objectFit: 'contain' }}
                                    />
                                    <Card.Body>
                                        <Card.Title style={{ color: 'black', fontSize: 17 }}> {product.title} </Card.Title>
                                        <Card.Text style={{ color: 'black' }}> Price: ${product.price} </Card.Text>
                                    </Card.Body>
                                </Card>




                            </Col>))
                    }
                </Row>

            </Row>




        </div>
    );
};
export default Home;