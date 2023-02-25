import { Breadcrumb, Layout, Menu, theme } from 'antd';
import Navbar from '../components/Navbar';
// const { Header, Content, Footer } = Layout;
const Home = ({user}) => {
  return (
    <Navbar user={user}/>
  );
};
export default Home;
