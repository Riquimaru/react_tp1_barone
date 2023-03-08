const ItemListContainer = (props) =>{
const {greeting} = props;
    return(
        <div
        style ={{
            color: 'blue',
            fontWeight: 'bolder'
        }}>
        <h2>{greeting}</h2>
        </div>
    )
}

export default ItemListContainer;