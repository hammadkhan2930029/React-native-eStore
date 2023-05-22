import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from './home';
import { NavigationContainer } from '@react-navigation/native'
import CustomDrawer from './customDrawer';
import About from './about';
import Blogs from './blogs';
import Contact from './contactUs';
import LoadMore from './blogsLoadMore';
import Apparel from './apparel';
import ApparelFullView from './apparelFullView';
import ApparelGrid from './apparelGrid';
import CollectionDetails from './collectionDetails';
import CollectionBlack from './collectionBlack';
import ProductDetails from './productDetail';
import ProductDetailsLayout from './productDetailsLayout';
import AddShippingAdress from './addShippingAdress';
import PaymentMethod from './paymentMethod';
import PlaceOrder from './placeOrder';
import CheckOut from './checkOut';

const Drawer = createDrawerNavigator();

function MyDrawer() {
    return (
        // <NavigationContainer>
        <Drawer.Navigator drawerContent={(props) => <CustomDrawer {...props} />}>
            <Drawer.Screen name="home" component={Home} options={{ headerShown: false }} />
            <Drawer.Screen name="about" component={About} options={{ headerShown: false }} />
            <Drawer.Screen name="blogs" component={Blogs} options={{ headerShown: false }} />
            <Drawer.Screen name="contact" component={Contact} options={{ headerShown: false }} />
            <Drawer.Screen name="loadMore" component={LoadMore} options={{ headerShown: false }} />
            <Drawer.Screen name="apparel" component={Apparel} options={{ headerShown: false }} />
            <Drawer.Screen name="apparelFullView" component={ApparelFullView} options={{ headerShown: false }} />
            <Drawer.Screen name="apparelGrid" component={ApparelGrid} options={{ headerShown: false }} />
            <Drawer.Screen name="collectionDetails" component={CollectionDetails} options={{ headerShown: false }} />
            <Drawer.Screen name="collectionBlack" component={CollectionBlack} options={{ headerShown: false }} />
            <Drawer.Screen name="productDetails" component={ProductDetails} options={{ headerShown: false }} />
            <Drawer.Screen name="productDetailsLayout" component={ProductDetailsLayout} options={{ headerShown: false }} />
            <Drawer.Screen name="addShipping" component={AddShippingAdress} options={{ headerShown: false }} />
            <Drawer.Screen name="paymentMethod" component={PaymentMethod} options={{ headerShown: false }} />
            <Drawer.Screen name="placeOrder" component={PlaceOrder} options={{ headerShown: false }} />
            <Drawer.Screen name="checkout" component={CheckOut} options={{ headerShown: false }} />
            {/* <Drawer.Screen name="placeOrder" component={} options={{ headerShown: false }} /> */}




        </Drawer.Navigator>

        // </NavigationContainer>

    );
}

export default MyDrawer;