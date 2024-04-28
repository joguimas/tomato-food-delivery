import './ExploreMenu.css';
import { menu_list } from '../../assets/assets';

const ExploreMenu = ({category, setCategory}) => {
  return (
    <div className="explore-menu" id="explore-menu">
      <h1>Explore our menu</h1>
      <p className="explore-menu-text">Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.</p>
      <div className="explore-menu-list">
        { menu_list?.map((item, idx) => {
          return (
            <div onClick={()=>setCategory(p => p===item.menu_name ? "All" : item.menu_name)} key={idx} className="explore-menu-list-item">
              <img src={item.menu_image} alt="" className={category===item.menu_name ? "active" : ""} />
              <p>{item.menu_name}</p>
            </div>
          )
        }) }
      </div>
      <hr />
    </div>
  )
}

export default ExploreMenu