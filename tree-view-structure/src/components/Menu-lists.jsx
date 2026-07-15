import MenuItems from "./Menu-items";

export default function MenuList({ list = [] }) {
    return (
        <ul className="menu-list-container">
            {
                list && list.length ?
                    list.map(listItem => <MenuItems item={listItem} />) : null
            }

        </ul>
    )
}