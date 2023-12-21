/* eslint-disable no-unused-vars */
import React from 'react'
import HomePage from './Page/Home/HomePage'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import NavBarLogin from './Components/Utility/NavBarLogin'
import Footer from './Components/Utility/Footer'
import LoginPage from './Page/Auth/LoginPage'
import RegisterPage from './Page/Auth/RegisterPage'
import AllCategoryPage from './Page/Category/AllCategoryPage'
import AllBrandPage from './Page/Brand/AllBrandPage'
import ShopProductPage from './Page/Products/ShopProductPage'
import ProductDetailsPage from './Page/Products/ProductDetailsPage'
import CartPage from './Page/Cart/CartPage'
import ChoosePayMethodPage from './Page/CheckOut/ChoosePayMethodPage'
import AdminAllProductsPage from './Page/Admin/AdminAllProductsPage'
import AdminAllOrdersPage from './Page/Admin/AdminAllOrdersPage'
import AdminOrderDetailsPage from './Page/Admin/AdminOrderDetailsPage'
import AdminAddBrandPage from './Page/Admin/AdminAddBrandPage'
import AdminAddCategoryPage from './Page/Admin/AdminAddCategoryPage'
import AdminAddSubCategoryPage from './Page/Admin/AdminAddSubCategoryPage'
import AdminAddProductsPage from './Page/Admin/AdminAddProductsPage'
import UserAllOrdersPage from './Page/User/UserAllOrdersPage'
import UserFavoriteProductsPage from './Page/User/UserFavoriteProductsPage'
import UserAllAddressPage from './Page/User/UserAllAddressPage'
import UserAddAddressPage from './Page/User/UserAddAddressPage'
import UserEditAddressPage from './Page/User/UserEditAddressPage'
import UserProfilePage from './Page/User/UserProfilePage'
import AdminEditProductsPage from './Page/Admin/AdminEditProductsPage'
import ForgetPasswordPage from './Page/Auth/ForgetPasswordPage'
import VerifyPasswordPage from './Page/Auth/VerifyPasswordPage'
import ResetPasswordPage from './Page/Auth/ResetPasswordPage'
import AdminAddCouponPage from './Page/Admin/AdminAddCouponPage'
import AdminEditCouponPage from './Page/Admin/AdminEditCouponPage'
import ProtectedRouteHook from './Hook/auth/protected-route-hook'
import ProtectedRoute from './Components/Utility/ProtectedRoute'
export default function App() {
  const [isUser, isAdmin, userData] = ProtectedRouteHook()
  return (
    <>
      <BrowserRouter>
        <NavBarLogin/>
          <Routes>
              <Route index element={<HomePage/>}/>
              <Route path='/login' element={<LoginPage/>}/>
              <Route path='/register' element={<RegisterPage/>}/>
              <Route path='/allcategory' element={<AllCategoryPage/>}/>
              <Route path='/allbrand' element={<AllBrandPage/>}/>
              <Route path='/products' element={<ShopProductPage/>}/>
              <Route path='/products/:id' element={<ProductDetailsPage/>}/>
              <Route path='/cart' element={<CartPage/>}/>
              <Route path='/user/forget-password' element={<ForgetPasswordPage/>}/>
              <Route path='/user/verify-code' element={<VerifyPasswordPage/>}/>
              <Route path='/user/reset-password' element={<ResetPasswordPage/>}/>

          <Route element={<ProtectedRoute auth={isAdmin}/>}>
              <Route path='/admin/allproducts' element={<AdminAllProductsPage/>}/>
              <Route path='/admin/allorders' element={<AdminAllOrdersPage/>}/>
              <Route path='/admin/orders/:id' element={<AdminOrderDetailsPage/>}/>
              <Route path='/admin/addbrand' element={<AdminAddBrandPage/>}/>
              <Route path='/admin/addcategory' element={<AdminAddCategoryPage/>}/>
              <Route path='/admin/addsubcategory' element={<AdminAddSubCategoryPage/>}/>
              <Route path='/admin/addproduct' element={<AdminAddProductsPage/>}/>
              <Route path="/admin/addcoupon" element={<AdminAddCouponPage />} />
              <Route path="/admin/editcoupon/:id" element={<AdminEditCouponPage />} />
              <Route path='/admin/editproduct/:id' element={<AdminEditProductsPage/>}/>
          </Route>

          <Route element={<ProtectedRoute auth={isUser}/>}>
              <Route path='/user/allorders' element={<UserAllOrdersPage/>}/>
              <Route path='/user/favoriteproducts' element={<UserFavoriteProductsPage/>}/>
              <Route path='/user/addresses' element={<UserAllAddressPage/>}/>
              <Route path='/user/add-address' element={<UserAddAddressPage/>}/>
              <Route path='/user/edit-address/:id' element={<UserEditAddressPage/>}/>
              <Route path='/user/profile' element={<UserProfilePage/>}/>
              <Route path='/order/paymethoud' element={<ChoosePayMethodPage/>}/>
          </Route>

          </Routes>
          <Footer/>
      </BrowserRouter>
    </>
  )
}
