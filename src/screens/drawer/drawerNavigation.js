import { createDrawerNavigator } from '@react-navigation/drawer';

import { NavigationContainer } from '@react-navigation/native'
import CustomDrawer from './customDrawer';
import About from './about';
import Blogs from './blogs';
import Contact from './contactUs';
import CollectionDetails from './collectionDetails';
import Apparel from './apparel';
import Home from './home';
import ApparelFullView from './apparelFullView';
import ApparelGrid from './apparelGrid';
import ProductDetails from './productDetail';
import LoadMore from './blogsLoadMore';
import CheckOut from './checkOut';
import ProductDetailsLayout from './productDetailsLayout';
import CollectionBlack from './collectionBlack';
import CheckDetails from './checkDetails';

const Drawer = createDrawerNavigator();

const MyDrawer = () => {
    return (
        <Drawer.Navigator drawerContent={(props) => <CustomDrawer {...props} />}>
            <Drawer.Screen name="home" component={Home} options={{ headerShown: false }} />
            <Drawer.Screen name="about" component={About} options={{ headerShown: false }} />
            <Drawer.Screen name="blogs" component={Blogs} options={{ headerShown: false }} />
            <Drawer.Screen name="contact" component={Contact} options={{ headerShown: false }} />
            <Drawer.Screen name="apparel" component={Apparel} options={{ headerShown: false }} />
            <Drawer.Screen name="collectionDetails" component={CollectionDetails} options={{ headerShown: false }} />
            <Drawer.Screen name="apparelFullView" component={ApparelFullView} options={{ headerShown: false }} />
            <Drawer.Screen name="apparelGrid" component={ApparelGrid} options={{ headerShown: false }} />
            <Drawer.Screen name="checkdetails" component={CheckDetails} options={{ headerShown: false }} />
            <Drawer.Screen name="productDetails" component={ProductDetails} options={{ headerShown: false }} />
            <Drawer.Screen name="loadMore" component={LoadMore} options={{ headerShown: false }} />
            <Drawer.Screen name="checkOut" component={CheckOut} options={{ headerShown: false }} />
            <Drawer.Screen name="productDetailsLayout" component={ProductDetailsLayout} options={{ headerShown: false }} />
            <Drawer.Screen name="collectionBlack" component={CollectionBlack} options={{ headerShown: false }} />
        </Drawer.Navigator>

    );
}

export default MyDrawer;