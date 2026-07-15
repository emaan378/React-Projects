import MenuList from "./Menu-lists";

import './styles.css'

export default function TreeView({Menus=[]}){
    return (
        <div className="tree-view-container">
            <MenuList list={Menus}/>
      </div>
  )
}