import Item from './Item'

const ItemsContainer = ({list,done,handleClick}) => {

  return (
    
    <>
        <ul className="list-group">
            {
                list.map((listElement)=>(
                    <Item key={listElement} item={listElement} done={done.includes(listElement)} onDone={handleClick}></Item>
                ))
            }
        </ul>
  </>
  )
}

export default ItemsContainer