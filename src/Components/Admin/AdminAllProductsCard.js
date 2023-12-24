import React, { useState } from 'react'
import { Button, Card, Col, Modal, Row } from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import { deleteProduct } from '../../Redux/actions/productsAction';

export default function AdminAllProductsCard({item}) {
    const [show, setShow] = useState(false);
    const dispatch=useDispatch()
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleDelete = async() => {
        await dispatch(deleteProduct(item._id));
        setShow(false);
        window.location.reload();
    };
  return (
    <Col xs="12" sm="6" md="5" lg="4" className="d-flex">
        <Modal show={show} onHide={handleClose}>
        <Modal.Header >
        <Modal.Title><div className='font'>تأكيد الحذف</div></Modal.Title>
        </Modal.Header>
        <Modal.Body><div className='font'>هل انت متأكد من عملية الحذف</div></Modal.Body>
        <Modal.Footer>
            <Button  className='font' variant="success" onClick={handleClose}>
            تراجع
          </Button>
          <Button  className='font' variant="dark" onClick={handleDelete}>
            حذف
          </Button>
        </Modal.Footer>
      </Modal>
            <Card
                className="my-2"
                style={{
                    width: "100%",
                    height: "350px",
                    borderRadius: "8px",
                    border:"none",
                    borderBottom:"1px solid gray",
                    backgroundColor: "#FFFFFF",
                }}>
                <Row className="d-flex justify-content-center px-2">
                    <Col className=" d-flex justify-content-between my-1" >
                        <div className="d-inline btn btn-danger" onClick={handleShow} style={{marginTop:"-2%"}}>ازاله</div>
                <Link to={`/admin/editproduct/${item._id}`} style={{ textDecoration: "none" }}>
                        <div className="d-inline btn btn-primary">تعديل</div>
                </Link>
                    </Col>
                </Row>
                <Link to={`/products/${item._id}`} style={{ textDecoration: "none",color:"green" }}>
                    <Card.Img style={{ height: "228px", width: "100%" }} src={item.imageCover} />
                    <Card.Body>
                        <Card.Title style={{maxHeight:"20px",overflow:"hidden"}}>
                            <div className="card-title">
                                {item.title}
                            </div>
                        </Card.Title>
                        <Card.Text>
                            <div className="d-flex justify-content-between">
                                <div className="card-rate">{item.ratingsQuantity}</div>
                                <div className="d-flex">
                                    <div className="card-currency mx-1">جنيه</div>
                                    <div className="card-price">
                                        {item.price}
                                    </div>
                                </div>
                            </div>
                        </Card.Text>
                    </Card.Body>
                </Link>
            </Card>
        </Col>
  )
}
