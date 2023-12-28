import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getAllCategory } from '../../Redux/actions/categoryAction';
import { getAllBrand } from '../../Redux/actions/brandAction';
import { createProduct } from '../../Redux/actions/productsAction';
import { getOneCategory } from '../../Redux/actions/subCategoryAction';
import notify from '../useNotifaction';

const AdminAddProductsHook = () => {


    const dispatch = useDispatch();
    useEffect(() => {
        const run=async() =>{
            await dispatch(getAllCategory());
            await dispatch(getAllBrand());
            }
        run();
    }, [dispatch])
    //get last catgeory state from redux
    const category = useSelector(state => state.allCategory.category)
    //get last brand state from redux
    const brand = useSelector(state => state.allBrand.brand)

    //get last sub cat state from redux
    const subCat = useSelector(state => state.subCategory.subcategory)

    const onSelect = (selectedList) => {
        setSeletedSubID(selectedList)
    }
    const onRemove = (selectedList) => {
        setSeletedSubID(selectedList)
    }

    const [options, setOptions] = useState([]);
    //values images products
    const [images, setImages] = useState({});
    //values state
    const [prodName, setProdName] = useState('');
    const [prodDescription, setProdDescription] = useState('');
    const [priceBefore, setPriceBefore] = useState('السعر قبل الخصم');
    const [priceAftr, setPriceAftr] = useState('السعر بعد الخصم');
    const [qty, setQty] = useState('الكمية المتاحة');
    const [CatID, setCatID] = useState('');
    const [BrandID, SetBrandID] = useState('');
    const [seletedSubID, setSeletedSubID] = useState([]);
    const [loading, setLoading] = useState(true);


    //to change name state
    const onChangeProdName = (event) => {
        event.persist();
        setProdName(event.target.value)
    }
    //to change name state
    const onChangeDesName = (event) => {
        event.persist();
        setProdDescription(event.target.value)
    }
    //to change name state
    const onChangePriceBefor = (event) => {
        event.persist();
        setPriceBefore(event.target.value)
    }
    //to change name state
    const onChangePriceAfter = (event) => {
        event.persist();
        setPriceAftr(event.target.value)
    }  //to change name state
    const onChangeQty = (event) => {
        event.persist();
        setQty(event.target.value)
    }
    const onChangeColor = (event) => {
        event.persist();
        setShowColor(!showColor)
    }

    //to show hide color picker
    const [showColor, setShowColor] = useState(false);
    //to store all pick color
    const [colors, setColors] = useState([]);
    //when choose new color
    const handelChangeComplete = (color) => {
        setColors([...colors, color.hex])
        setShowColor(!showColor)
    }
    const removeColor = async(color) => {
        const newColor = await colors.filter((e) => e !== color)
        setColors(newColor)
    }


    
    //when selet category store id
    const onSeletCategory = async (e) => {
        if (e.target.value !== 0) {
            await dispatch(getOneCategory(e.target.value))
        }
        setCatID(e.target.value)
    }
    useEffect(() => {
            if (CatID !== 0) {
                try{
                if(subCat){
                    if (subCat.data) {
                        setOptions(subCat.data)
                    }
                }
                }catch(e){}
            }
        
        
    }, [CatID, subCat])

    //when selet brand store id
    const onSeletBrand = (e) => {
        SetBrandID(e.target.value)
    }

    //to convert base 64 to file
    function dataURLtoFile(dataurl, filename) {

        var arr = dataurl.split(','),
            mime = arr[0].match(/:(.*?);/)[1],
            bstr = atob(arr[1]),
            n = bstr.length,
            u8arr = new Uint8Array(n);

        while (n--) {
            u8arr[n] = bstr.charCodeAt(n);
        }

        return new File([u8arr], filename, { type: mime });
    }

    //to save data 

    const handelSubmit = async (e) => {
        e.preventDefault();
       
        if (CatID === 0 || prodName === "" || prodDescription === "" || images.length <= 0 || priceBefore <= 0) {
            notify("من فضلك اكمل البيانات", "warn")
            return;
        }
        try{
            setLoading(true);
            //convert base 64 image to file 
        const imgCover = dataURLtoFile(images[0], Math.random() + ".png")
        //convert array of base 64 image to file 
        const itemImages = Array.from(Array(Object.keys(images).length).keys()).map(
            (item, index) => {
                return dataURLtoFile(images[index], Math.random() + ".png")
            }
        )

        const formData = new FormData();
        formData.append("title", prodName);
        formData.append("description", prodDescription);
        formData.append("quantity", qty);
        formData.append("price", priceBefore);
        formData.append("priceAfterDiscount", priceAftr);
        formData.append("imageCover", imgCover);
        formData.append("category", CatID);
        formData.append("brand", BrandID);
        itemImages.map((item) => formData.append("images", item))
        colors.map((color) => formData.append("colors", color))
        seletedSubID.map((item) => formData.append("subCategory", item._id))


        
        await dispatch(createProduct(formData))
        setLoading(false)
        }catch(e) {}
       
    }

    //get create meesage
    const product = useSelector(state => state.allproducts.products)

    useEffect(() => {
        try{
            if (loading === false) {
                    setTimeout(() => {
                        setColors([])
                        setImages([])
                        setProdName('')
                        setProdDescription('')
                        setPriceBefore('السعر قبل الخصم')
                        setPriceAftr('السعر بعد الخصم')
                        setQty('الكمية المتاحة')
                        SetBrandID(0)
                        setSeletedSubID([])
                        setLoading(true)
                    }, 2000)
                if (product) {
                    setTimeout(()=>{
                        notify("تم الاضافة بنجاح", "success")
                    }, 2000)
                        
                }else {
                    setTimeout(()=>{
                        notify("هناك مشكله", "error")
                    }, 2000)
                    
                }
            }
        }catch(e){}
        
    }, [loading, product])


    return [onChangeDesName, onChangeQty, onChangeColor, onChangePriceAfter, onChangePriceBefor, onChangeProdName, showColor, category, brand, priceAftr, images, setImages, onSelect, onRemove, options, handelChangeComplete, removeColor, onSeletCategory, handelSubmit, onSeletBrand, colors, priceBefore, qty, prodDescription, prodName]

}

export default AdminAddProductsHook