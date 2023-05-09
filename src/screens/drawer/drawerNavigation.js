import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from './home';
import Blogs from './blogs';


const Drawer = createDrawerNavigator();
const  DrawerNavigation = () => {
    return (
        
            <Drawer.Navigator>
                <Drawer.Screen name="home" component={Home} />
                <Drawer.Screen name="blogs" component={Blogs} />
            </Drawer.Navigator>
        

    );
};

export default DrawerNavigation;