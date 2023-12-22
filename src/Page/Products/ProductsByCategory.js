import React from 'react'
import { Container, Col, Row } from 'react-bootstrap';
import Pagination from '../../Components/Utility/Pagination';
import CardProductContainer from './../../Components/Products/CardProductContainer';
import { useParams } from 'react-router-dom';
import ViewAllProductsCategoryHook from './../../Hook/products/view-all-products-category-hook';

const ProductsByCategory = () => {

    const { id } = useParams()


    const [items, pagination, onPress] = ViewAllProductsCategoryHook(id)
    if (pagination)
        var pageCount = pagination
    else
        pageCount = 0

    return (
        <div style={{ minHeight: '670px' }}>

            <Container>
                <Row className='d-flex flex-row'>

                    <Col sm="12" >
                        <CardProductContainer products={items} title="" btntitle="" />
                    </Col>
                </Row>

                <Pagination pageCount={pageCount} onPress={onPress} />
            </Container>
        </div>
    )
}

export default ProductsByCategory